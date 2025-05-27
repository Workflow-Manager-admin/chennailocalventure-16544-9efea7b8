#!/bin/bash
cd /home/kavia/workspace/code-generation/chennailocalventure-16544-9efea7b8/chennailocalventure_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

