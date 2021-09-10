from fastapi import BackgroundTasks
from fastapi.routing import APIRouter

router = APIRouter(
    prefix='/admin'
)


def crawling():
    for i in range(1000):
        print(i)


@router.get("/scraping")
async def scraping(background_task: BackgroundTasks):
    background_task.add_task(crawling)
    return {"message": "ok"}
