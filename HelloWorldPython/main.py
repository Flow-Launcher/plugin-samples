# -*- coding: utf-8 -*-

from flowlauncher import FlowLauncher


class HelloWorld(FlowLauncher):

    def query(self, query):
        return [
            {
                "Title": "Hello World",
                "SubTitle": "Query: {}".format(query),
                "IcoPath": "Images/app.ico",
                "ContextData": "ctxData",
            }
        ]

    def context_menu(self, data):
        return [
            {
                "Title": "Context menu entry",
                "SubTitle": "Data: {}".format(data),
                "IcoPath": "Images/app.ico",
            }
        ]


if __name__ == "__main__":
    HelloWorld()
