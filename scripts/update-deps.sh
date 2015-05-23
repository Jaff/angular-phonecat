#!/bin/bash

###
# This scripts updates the app/bower_components with the latest changes to bower.json
#
###

rm -fr app/bower_components
npm install
bower install
