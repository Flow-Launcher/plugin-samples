# -*- coding: utf-8 -*-

import sys,os
parent_folder_path = os.path.abspath(os.path.dirname(__file__))
sys.path.append(parent_folder_path)
sys.path.append(os.path.join(parent_folder_path, 'lib'))
sys.path.append(os.path.join(parent_folder_path, 'plugin'))

from flowlauncher import FlowLauncher


class HelloWorld(FlowLauncher):

    def query(self, query):
        return [
            {
                "Title": "Hello World, this is where title goes. {}".format(('Your query is: ' + query , query)[query == '']),
                "SubTitle": "This is where your subtitle goes",
                "IcoPath": "Images/app.png",
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
