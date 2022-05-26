import React from "react";

const Blogs = () => {
  return (
    <div className="">
      <h1 className="text-3xl text-red-700 my-5 font-semibold text-center">Welcome to my blogs!!</h1>
      <div class="card lg:card-side shadow-xl mx-auto w-[95%] md:max-w-[1000px] bg-slate-600 text-white">
        <div class="card-body">
          <h2 class="card-title text-yellow-500">
            How will you improve the performance of a React Application?
          </h2>
          <ul className="list-disc">
            <li className="ml-6">
              Memoization is an optimization technique used primarily to speed
              up computer programs by storing the results of expensive function
              calls and returning the cached result when the same inputs occur
              again.
            </li>
            <li className="ml-6">
              Using functional components avoid the creation of class instances
              while also decreasing the overall bundle size because they minify
              better than classes.
            </li>
            <li className="ml-6">
              Using Fragments to Avoid Additional HTML Element Wrappers
            </li>
            <li className="ml-6">
              Inline Function Definition in the Render Function Should Be
              Avoided.
            </li>
            <li className="ml-6">
              We can improve performance by Throttling and Debouncing Event
              Action in JavaScript.
            </li>
          </ul>
        </div>
      </div>
      <div class="card lg:card-side shadow-xl mx-auto w-[95%] md:max-w-[1000px] bg-slate-600 text-white mt-5">
        <div class="card-body">
          <h2 class="card-title text-yellow-500">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            There are mainly four ways we can manage a state in a React
            application -
          </p>
          <ul>
            <li>
              <span className="text-lg font-semibold text-error">Local state : </span> Data
              that we handle in one or more components is referred to as local
              state. The useState hook is most commonly used in React to manage
              local state.
            </li>
            <li>
              <span className="text-lg font-semibold text-error">Global state : </span> Data
              that we handle across several components is referred to as global
              state. When we wish to receive and change data from everywhere in
              our app, or at least across many components, we need global state.
            </li>
            <li>
              <span className="text-lg font-semibold text-error">Server state : </span> Data
              from an external server that has to be combined with our current
              UI state. Server state is a basic idea, but it can be difficult to
              manage alongside all of our other UI data, both local and global.
            </li>
            <li>
              <span className="text-lg font-semibold text-error">URL state : </span>Data
              found on our URLs, such as pathnames and query parameters. The URL
              state is generally overlooked as a state category, yet it is an
              important one.
            </li>
          </ul>
        </div>
      </div>
      <div class="card lg:card-side shadow-xl mx-auto w-[95%] md:max-w-[1000px] bg-slate-600 text-white mt-5">
        <div class="card-body">
          <h2 class="card-title text-yellow-500"> How does prototypical inheritance work?</h2>
          <p>
            Prototypal Inheritance is a javascript feature that allows us to add
            methods and properties to objects. It's a method that allows one
            object to inherit the properties and methods of another. We
            traditionally use Object.getPrototypeOf and Object.setPrototypeOf to
            get and set the Prototype of an object.
          </p>
        </div>
      </div>
      <div class="card lg:card-side shadow-xl mx-auto w-[95%] md:max-w-[1000px] bg-slate-600 text-white mt-5">
        <div class="card-body">
          <h2 class="card-title text-yellow-500">Why you do not set the state directly in React?</h2>
            <ul className="list-disc">
                <li className="ml-6">
                We should never update the state directly because If you alter state directly, executing setState thereafter may just overwrite our changes.

                </li>
                <li className="ml-6">
                We should never update the state directly because If you alter state directly, executing setState thereafter may just overwrite our changes.

                </li>
                <li className="ml-6">
                this.state does not change instantly when we directly update the state. Instead, it generates a pending state transition, which will only return the current value when accessed after calling this function.
                </li>
                <li className="ml-6">We will lose control of the state across all components.</li>
            </ul>
        </div>

      </div>
      <div class="card lg:card-side shadow-xl mx-auto w-[95%] md:max-w-[1000px] bg-slate-600 text-white mt-5">
        <div class="card-body">
          <h2 class="card-title text-yellow-500"> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
          <p>
            If we have a array of products like<br />
            <code>
              {
                `const products = [{
                  name: 'watch',
                  price: 50,
                  description: 'some description'
                },{
                  name: 'phone',
                  price: 100,
                  description: 'some description'
                },{
                  name: 'book',
                  price: 10,
                  description: 'some description'
                },{
                  name: 'watch',
                  price: 60,
                  description: 'some description'
                }]`
              }
            </code>
            <br />
            In this case we can implement <code>const product = products.find{'(product =>product.name === phone)'}</code> method if we want to find the first product which has a name property with value phone.
            However if we want to find multiple products which matches a certain name value then we can use filter{'()'} method of array like this <code>
            const product = products.filter{'(product =>product.name === phone)'}
            </code>
          </p>
        </div>
      </div>
      <div class="card lg:card-side shadow-xl mx-auto w-[95%] md:max-w-[1000px] bg-slate-600 text-white mt-5">
        <div class="card-body">
          <h2 class="card-title text-yellow-500">What is a unit test? Why should write unit tests?</h2>
          <p>Individual software units, such as groupings of computer program modules, usage processes, and operating procedures, are inspected to verify if they are fit for use in the unit testing process. It enables us to obtain a basic understanding of the unit API by learning what functionality a unit provides and how to use it. It also helps us to fine-tune the code and ensure that the module functions properly. It allows us to test elements of the project without having to wait for others to finish.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
