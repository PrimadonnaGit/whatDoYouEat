import React, {useState} from 'react';
import {Button, Input, Tag} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

const IngredientsInput = () => {
    const [searchValue, setSearchValue] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(false);

    const addIngredients = value => {
        if (value.length > 0) {
            setIngredients([...ingredients, value]);
        }
        clearInput()
    }

    const clearInput = () => {
        setSearchValue("");
    }

    const handleInput = event => {
        const {value} = event.target;
        setSearchValue(value);
    }

    const handleClose = (ingredient) => {
        setIngredients(ingredients.filter(t => t !== ingredient));
    }

    const handleClick = event => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }


    return (
        <>
            {/* 재료 검색 */}
            <Input.Group>
                <Input.Search
                    placeholder="냉장고에 있는 재료들을 입력해보세요!"
                    enterButton="추가하기"
                    onChange={handleInput}
                    onSearch={addIngredients}
                    value={searchValue}
                    size="large"
                    allowClear
                    // loading
                />
            </Input.Group>

            {/* 재료 추가 */}
            <div style={{minHeight: "300px", marginTop: 10}}>
                {ingredients.length > 0 ? <span style={{marginRight: 8}}>추가된 재료:</span> : ""}
                {ingredients.map(ingredient => (
                    <Tag
                        key={ingredient}
                        onClose={() => handleClose(ingredient)}
                        closable
                    >
                        {ingredient}
                    </Tag>
                ))}
            </div>
            {/* 최종 검색 */}
            <Input.Group>
                <Button type="primary" icon={<SearchOutlined/>} size="large" onClick={handleClick} loading={loading}
                        block>
                    음식 검색하기
                </Button>
            </Input.Group>

        </>
    )
}

export default IngredientsInput;
