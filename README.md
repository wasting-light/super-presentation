# super-presentation

A polymer slide presentation element.

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install super-presentation --save
```

Or [download as ZIP](https://github.com/grvcoelho/super-presentation/archive/master.zip)

## Usage

```html
  <super-presentation>
    <super-slide>
      <h1 title>Slide 1</h1>
      <p>Topic</p>
    </super-slide>
    
    <super-slide>
      <h1 title>Slide 2</h1>
      <a href="#">I support any HTML tags :D</a>
    </super-slide>
  </super-presentation>
```
## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [gulp](http://gulpjs.com/):

    ```sh
    $ [sudo] npm install -g bower gulp
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ gulp server
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://grvcoelho.mit-license.org/) © Guilherme Rv Coelho
