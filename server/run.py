#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import os
import sys
import argparse

from src.app import app

parser = argparse.ArgumentParser(description="Uploadr")
parser.add_argument(
    "--port", "-p",
    type=int,
    help="Port to listen on",
    default=5000,
)
args = parser.parse_args()

if __name__ == '__main__':
    flask_options = dict(
        host='0.0.0.0',
        debug=True,
        port=args.port,
        threaded=True,
    )

    # folder = os.path.join("uploadr/static/results/")
    # files = os.listdir(folder)

    # for file in files:
    #     if(".json" in file):
    #         os.remove(folder + file)

    app.run(**flask_options)

