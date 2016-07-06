/** @jsx etch.dom */

import etch from '../../src/index'

describe('etch.initialize(component)', () => {
  it('returns an element with content based on the render method of the given component', () => {
    let component = {
      render () {
        return <div>Hello World</div>
      },

      update () {}
    }
    etch.initialize(component)

    expect(component.element.textContent).to.equal('Hello World')
  })

  it('creates references to DOM elements', () => {
    let component = {
      render () {
        return <div><span ref='greeting'>Hello</span> <span ref='greeted'>World</span></div>
      },

      update () {}
    }
    etch.initialize(component)

    expect(component.refs.greeting.textContent).to.equal('Hello')
    expect(component.refs.greeted.textContent).to.equal('World')
  })

  it('throws an exception if undefined is returned from render', () => {
    let component = {
      render () {},

      update () {}
    }

    expect(function() {
      etch.initialize(component)
    }).to.throw(/invalid falsy value/)
  })
})
