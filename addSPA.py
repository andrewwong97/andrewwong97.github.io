script = "<script>!function(i){if(i.search){var a={};i.search.slice(1).split(\"&\").forEach(function(i){var l=i.split(\"=\");a[l[0]]=l.slice(1).join(\"=\").replace(/~and~/g,\"&\")}),void 0!==a.p&&window.history.replaceState(null,null,i.pathname.slice(0,-1)+(a.p||\"\")+(a.q?\"?\"+a.q:\"\")+i.hash)}}(window.location);</script>"

def main():
	p = open('index.html','r').read()
	appended = p[0:p.find('<head>')] + script + p[p.find('<head>')+6:]

	with open('index.html', 'w') as f:
		f.write(appended)

if __name__ == '__main__':
	main()