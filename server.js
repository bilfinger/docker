require       ( 'http'                                          )
.createServer ( (request,response)  => response.end('hallo'   ) )
.listen       ( 8080, 'localhost', () => console.log('running') )
;
