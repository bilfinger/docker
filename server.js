require       ( 'http'                                          )
.createServer ( (request,response)  => response.end('hallo1'  ) )
.listen       ( 8080, 'localhost', () => console.log('running') )
;
