#!/usr/bin/env python
# -*- coding: UTF-8 -*-

import json, os, cgi
form = cgi.FieldStorage()


# Gotta do this for the sake of the webz
# print "Content-Type: application/json;charset=utf-8"
print "Content-Type: text/plain; charset=utf-8"
print "Access-Control-Allow-Origin: *"
print

testing = False if "REQUEST_METHOD" in os.environ else True

# If we're just testing with fake values...
if testing:

	params = {}
	params = {
		'filename': 'hello_world',
		'file': '<h1>Hello World</h1>',
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

# If the filename and file are sent...
if 'filename' in params:
	if 'file' in params:
		# Write the file
		file = open(params['filename']+'.html', 'w') 
		file.write(params['file']) 
		file.close() 

		# Create the response
		response = {
			'success': True,
			'errors': None,
			'filename': params['filename']
		}

# Print the result
print json.dumps(response, indent=4)