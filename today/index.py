#!/usr/bin/env python
# -*- coding: UTF-8 -*-

import json, os, cgi
form = cgi.FieldStorage()


# Gotta do this for the sake of the webz
# print "Content-Type: application/json;charset=utf-8"
print "Content-Type: text/html; charset=utf-8"
print "Access-Control-Allow-Origin: *"
print

testing = False if "REQUEST_METHOD" in os.environ else True

# If we're just testing with fake values...
if testing:

	params = {}
	params = {
		'date': '5-6-18',
	}

# If we're live...
else:

	# Define Params from QS or POST values
	params = {}
	for key in form.keys():
		variable = str(key)
		value = str(form.getvalue(variable))
		params[variable] = value


# Create the response
response = {
	'success': False,
	'errors': "No file or filename given...",
}

# Get the head and foot...
head = open('head.html', 'r').read() 
foot = open('foot.html', 'r').read() 

# Get the latest html file...
if 'date' in params:
	file = open(params['date']+'.html', 'r').read()

# Print the result
# print file
print head + file + foot