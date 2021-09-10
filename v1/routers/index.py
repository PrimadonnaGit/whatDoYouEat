from fastapi import Request
from fastapi.routing import APIRouter
from fastapi.templating import Jinja2Templates

router = APIRouter()

templates = Jinja2Templates(directory="views/build")


@router.get("/")
async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
