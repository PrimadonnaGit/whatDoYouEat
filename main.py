# from typing import *
import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from v1.routers import admin, index


def create_app():
    app = FastAPI()

    app.mount("/static", StaticFiles(directory="views/build/static"), name="static")

    # DB

    # Router
    app.include_router(index.router)
    app.include_router(admin.router)
    return app


app = create_app()

if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=True)
