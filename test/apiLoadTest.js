import loadtest from 'loadtest';

describe('Recipe APIs', () => {

    describe('Performance Test - GET route /api/v1/recipes', () => {
        it('It should return all recipes', function(done) {
            this.timeout(1000 * 60);

            const options = {
                "url": 'http://localhost:5000/api/v1/recipes',
                "maxSeconds": 10,
                "concurrency": 25,
                "method": 'GET',
            };

            loadtest.loadTest(options, function(error, result) {
                if (error) {
                    return console.error(`Got an error: ${error}`);
                } else {
                    console.log('Tests run successfully');
                    console.log('Results: ', result);
                    done();
                }
            });
        });
    });

    describe('Performance Test - POST route /api/v1/recipes', () => {
        it('It should create recipes', function(done) {
            this.timeout(1000 * 60);

            const options = {
                "url": 'http://localhost:5000/api/v1/recipes',
                "maxRequests": 5,
                "maxSeconds": 5,
                "method": 'POST',
                requestGenerator: (params, options, client, callback) => {
                    let data = {
                        title: "TestPost",
                        ingredients: "Testing",
                        directions: "Directions",
                    }
                    const message = '{"hi": "ho"}';
                    options.headers['Content-Type'] = 'application/json';
                    options.headers['Accept'] = 'application/json';
                    options.body = data;
                    const request = client(options, callback);
                    request.write(message);
                    return request;
                }
            };

            loadtest.loadTest(options, function(error, result) {
                if (error) {
                    return console.error(`Got an error: ${error}`);
                } else {
                    console.log('Tests run successfully');
                    console.log('Results: ', result);
                    done();
                }

                after(function(){
                    
                });
            });
        });
    });

    // describe('Performance Test - PUT route /api/v1/recipes', () => {
    //     it('It should modify all recipes', function(done) {
    //         this.timeout(1000 * 60);

    //         const options = {
    //             "url": 'http://localhost:5000/api/v1/recipes',
    //             "maxSeconds": 30,
    //             "concurrency": 25
    //         };

    //         loadtest.loadTest(options, function(error, result) {
    //             if (error) {
    //                 return console.error(`Got an error: ${error}`);
    //             } else {
    //                 console.log('Tests run successfully');
    //                 console.log('Results: ', result);
    //                 done();
    //             }
    //         });
    //     });
    // });

    // describe('Performance Test - DELETE route /api/v1/recipes', () => {
    //     it('It should create and delete all recipes', function(done) {
    //         this.timeout(1000 * 60);

    //         const options = {
    //             "url": 'http://localhost:5000/api/v1/recipes',
    //             "maxSeconds": 30,
    //             "concurrency": 25
    //         };

    //         loadtest.loadTest(options, function(error, result) {
    //             if (error) {
    //                 return console.error(`Got an error: ${error}`);
    //             } else {
    //                 console.log('Tests run successfully');
    //                 console.log('Results: ', result);
    //                 done();
    //             }
    //         });
    //     });
    // });

});