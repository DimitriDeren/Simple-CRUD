import loadtest from 'loadtest';

describe('Recipe APIs', () => {

    describe('Performance Test - GET route /api/v1/recipes', () => {
        it('GET Request from LocalHost', function(done) {
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

    describe('Performance Test - GET route /api/v1/recipes', () => {
      it('GET Request from Heroku', function(done) {
          this.timeout(1000 * 60);

          const options = {
              "url": 'https://glacial-spire-74573.herokuapp.com/api/v1/recipes',
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
                "maxRequests": 1,
                "maxSeconds": 5,
                "method": 'POST',
                "body":{
                  title: "TestPost",
                  ingredients: "Testing",
                  directions: "Directions",
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