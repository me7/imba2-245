global css body bg:cooler3 ff:Arial inset:0 d:vcc

tag App
	title = "Default button title"
	count = 0
	def getMsg
		let url = 'http://localhost:8080/api/hi'
		let req = await window.fetch(url)
		let msg = await req.text!
		L msg
		return msg
	<self>
		<button @click=(title=await getMsg!)> "{title}"
		# <%counter @click=count++>
		# 	css e:250ms us:none py:3 px:5 rd:4 bg:gray9 d:hcc g:1
		# 		bd:1px solid transparent @hover:indigo5
		# 	"count is {count}"

imba.mount <App>
