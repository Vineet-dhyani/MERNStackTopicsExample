//************************************Introduction to react****************************************************
    // Introduction to ReactJS: Let us understand this with a practical example.





    // Let’s say one of your friends posted a photograph on Facebook.Now you go and like the image and 
    // then you started checking out the comments too.Now while you are browsing over comments you see
    
    // that the likes count has increased by 100, since you liked the picture, even without reloading 
    // the page.This magical count change is because of ReactJS. 
    // React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
    // ‘V’ denotes the view in MVC.ReactJS is an open - source, component - based front end library responsible 
    // only for the view layer of the application.It is maintained by Facebook.
    // React uses a declarative paradigm that makes it easier to reason about your application and aims to be 
    // both efficient and flexible.It designs simple views for each state in your application, and React will 
    // update and render just the right component when your data changes.The declarative view makes your code 
    // more predictable and easier to debug.


//************************************************how react works***********************************************
        // How does it work: While building client-side apps, a team of Facebook developers realized that the DOM is slow
        // (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It
        // defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make
        // it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when
        //     it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will
        //     try to find the most efficient way to update the browser’s DOM.
        // Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of 
        // updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth 
        // keeping a DOM tree in it to speed up its manipulation.
        // Although React was conceived to be used in the browser, because of its design it can also be used in the server 
        // with Node.js. 

//************************************************package.json*******************************************************
       
         // It records important metadata about a project which is required before publishing to NPM, and also defines 
        // functional attributes of a project that npm uses to install dependencies, run scripts, and identify the 
        // entry point to our package.



//***************************************************introduction to jsx***************************************
                // instead of using regular JavaScript, React code should be written in something called JSX. 
                // Let us see a sample JSX code: 

                // const ele = <h1>This is sample JSX</h1>;
                // The above code snippet somewhat looks like HTML and it also uses a JavaScript-like variable but is neither
                // HTML nor JavaScript, it is JSX. JSX is basically a syntax extension of regular JavaScript and is used to 
                // create React elements. These elements are then rendered to the React DOM. We will learn about rendering 
                // and DOM in the next article in detail.

         ///////////////////////////////////why  jsx?  /////////////////////////////////////////////////////

        //  It is faster than normal JavaScript as it performs optimizations while translating to regular JavaScript.
        //  It makes it easier for us to create templates.
        //  Instead of separating the markup and logic in separated files, React uses components for this purpose.
        //   We will learn about components in detail in further articles.
        //  Using JavaScript expressions in JSX: In React we are allowed to use normal JavaScript expressions with 
        //  JSX. To embed any JavaScript expression in a piece of code written in JSX we will have to wrap that 
        //  expression in curly braces {}. Consider the below program, written in the index.js file: 



                                // React.createElement(element_name, element_properties, children); 


        //  You have also looked at a couple of examples about how JSX code gets converted to JavaScript code using React.createElement().
        // One such example is given below:

 

        //                                         JSX code:

        //                                         <div id="module">
        //                                         <p>ReactJS</p>
        //                                         </div>


        //                                         JavaScript code:

        //                                         React.createElement("div", {id: "module"},
        //                                         React.createElement("p", null, "ReactJS")
        //                                         );

        ////////////////////// /////////Attributes in JSX//////////////////////////////////////// 
       
       
        // JSX allows us to use attributes with the HTML elements just like we
        // do with normal HTML. But instead of the normal naming convention of HTML, JSX uses camelcase 
        // convention for attributes. For example, class in HTML becomes className in JSX. The main
        //  reason behind this is that some attribute names in HTML like ‘class’ are reserved keywords
        //   in JavaScripts                   
                            
        // As for string literals: We can specify the values of attributes as hard-coded strings using quotes: 
        // const ele = <h1 className = "firstAttribute">Hello!</h1>;
        // As expressions: We can specify attributes as expressions using curly braces {}: 
        // const ele = <h1 className = {varName}>Hello!</h1>;
        // Wrapping elements or Children in JSX: Consider a situation where you want to render multiple tags 
        // at a time. To do this we need to wrap all of this tag under a parent tag and then render this parent
        //  element to the HTML. All the subtags are called child tags or children of this parent element.        

        // Two curly braces are used with the style property — one to evaluate the expression inside the JSX code and
        //  the other to represent a JavaScript object, which is taken as input by the style  property.

        //                         <div style={{textTransform: 'uppercase',background: '#000'}}>
        //                         Phone Directory
        //                         </div>
        // The property names look like CSS property names, but they are not exactly like them. These names are
        //  actually JavaScript identifiers; they can be considered as the keys (or properties) of a JavaScript object
        // All property-value pairs are separated using the comma operator. The reason is that the style property accepts a 
        // JavaScript object where a comma should be used in contrast to a CSS style, where a semicolon is used instead.

        
//***************************************************Recat-DOM*********************************************** */


        // ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable
        // an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API containing 
        // the following methods and a few more. 

        // render()
        // findDOMNode()
        // unmountComponentAtNode()
        // hydrate()
        // createPortal()
        // Pre-requisite: To use the ReactDOM in any React web app we must first import ReactDOM from the react-dom package 


        // import ReactDOM from 'react-dom

                                           // >>>>render() Function<<<<<<<

        // This is one of the most important methods of ReactDOM. This function is used to render a single React Component or 
        // several Components wrapped together in a Component or a div element. This function uses the efficient methods of 
        // React for updating the DOM by being able to change only a subtree, efficient diff methods, etc. 
        
        // Syntax: 
        
        // ReactDOM.render(element, container, callback)
        // Parameters: This method can take a maximum of three parameters as described below.  
        
        // element: This parameter expects a JSX expression or a React Element to be rendered.
        // container: This parameter expects the container in which the element has to be rendered.
        // callback: This is an optional parameter that expects a function that is to be executed once the render is complete.
        // Return Type: This function returns a reference to the component or null if a stateless component was rendered. 



//*******************************************ReactJS | Virtual DOM********************************************************* */

                // Updating DOM: If you know a little about JavaScript then you might have seen people making use of
                // ‘getElementById()’ or ‘getElementByClass()’ method to modify the content of DOM. Every time there
                // is a change in the state of your application, the DOM gets updated to reflect that change in the UI
                // . Though doing things like this is not a problem and it works fine, consider a case where we have a
                // DOM that contains nodes in a large number, and also all these web elements have different styling 
                // and attributes.  As DOM is represented as a tree itself, updating the tree here is not a costly 
                // operation indeed we have a lot of algorithms on trees to make the updates fast. What’s proving 
                // to be costly is every time the DOM gets updated, the updated element and its children have to be
                //     rendered again to update the UI of our page. Like this each time there is a component update,
                //     the DOM needs to be updated and the UI components have to be re-rendered.
                
                // So as we know now that updating the DOM not only involves changing the content, it has a lot more 
                // attached to it. Also recalculating the CSS and changing the layouts involves complex algorithms, 
                // and they do affect the performance. So React has a different approach to dealing with this, as it 
                // makes use of something known as Virtual DOM.


                // Virtual DOM: React uses Virtual DOM exists which is like a lightweight copy of the actual DOM(a virtual
                //      representation of the DOM). So for every object that exists in the original DOM, there is an object
                //       for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly 
                //       change the layout of the document. Manipulating DOM is slow, but manipulating Virtual DOM is fast
                //        as nothing gets drawn on the screen. So each time there is a change in the state of our application, 
                //        the virtual DOM gets updated first instead of the real DOM. You may still wonder, “Aren’t we doing 
                //        the same thing again and doubling our work? How can this be faster?” Read below to understand how 
                //        things will be faster using virtual DOM.

                // How Virtual DOM actually make things faster: When anything new is added to the application, a virtual DOM 
                // is created and it is represented as a tree. Each element in the application is a node in this tree. So, 
                // whenever there is a change in the state of any element, a new Virtual DOM tree is created. This new Virtual 
                // DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes. After this, it 
                // finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get 
                // rendered on the page again.

                // How Virtual DOM helps React: In react, everything is treated as a component be it a functional component
                //  or class component. A component can contain a state. Each time we change something in our JSX file or let’s 
                //  put it in simple terms, whenever the state of any component is changed react updates its Virtual DOM tree. 
                //  Though it may sound that it is ineffective but the cost is not much significant as updating the virtual DOM
                //   doesn’t take much time. React maintains two Virtual DOM at each time, one contains the updated Virtual DOM 
                //   and one which is just the pre-update version of this updated Virtual DOM. Now it compares the pre-update 
                //   version with the updated Virtual DOM and figures out what exactly has changed in the DOM like which components
                //    have been changed. This process of comparing the current Virtual DOM tree with the previous one is known as
                //     ‘diffing’. Once React finds out what exactly has changed then it updated those objects only, on real DOM. 
                //     React uses something called batch updates to update the real DOM. It just means that the changes to the 
                //     real DOM are sent in batches instead of sending any update for a single change in the state of a component.
                //      We have seen that the re-rendering of the UI is the most expensive part and React manages to do this most 
                //      efficiently by ensuring that the Real DOM receives batch updates to re-render the UI. This entire process 
                //      of transforming changes to the real DOM is called Reconciliation

                // This significantly improves the performance and is the main reason why React and its Virtual DOM are much loved
                //  by developers all around.




//*************************************************Components*************************************************** */
                        // components are just JavaScript's way of writing independent, reusable, and dynamic code
                        
                        // there are two types of components in React — functional components and class components. As 
                        // the names suggest, functional components are written in the form of functions whereas class 
                        // components are written in the form of classes.


                                //  Functional Component:

                                // import React from 'react';

                                // const Header = function() {
                                // return (
                                // <div className="header">
                                //         Phone Directory
                                // </div>
                                // )
                                // }


                                // Class Component:

                                // import React, { Component } from 'react';

                                // class Header extends Component {
                                // render() {
                                // return (
                                //         <div className="header">
                                //         Phone Directory
                                //         </div>
                                // )
                                // }
                                // }

                //        1>A component’s name must start with a capital letter 
                //        2>A class component must extend from a base class named Component  
                //        3>A component must always return something
                //        4>A component can have a file extension as  .js  or  .jsx.              

//*********************************************ReactJS | Keys************************************************* */

            //    A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used
            //     to React to identify which items in the list are changed, updated, or deleted. In other words, we can say that
            //      keys are used to give an identity to the elements in the lists. The next thing that comes to mind is that what 
            //      should be good to be chosen as key for the items in lists. It is recommended to use a string as a key that 
            //      uniquely identifies the items in the list

            // We have told many times while discussing about keys that keys assigned to the array elements must be unique. By this
            // , we did not mean that the keys should be globally unique. All the elements in a particular array should have unique
            //  keys

            // Keys are not the same as props, only the method of assigning “key” to a component is the same as that of props. Keys
            //  are internal to React and can not be accessed from inside of the component like props. Therefore, we can use the same
            //   value we have assigned to the Key for any other prop we are passing to the Component.

//*************************************************props in ReactJS************************************************ */
            
            // Props are arguments passed into React components.

            // Props are passed to components via HTML attributes.
            // Props are arguments passed into React components.

            // Props are passed to components via HTML attributes.


            // function Car(props) {
            //     return <h2>I am a { props.brand }!</h2>;
            //   }
              
            //   function Garage() {
            //     return (
            //       <>
            //         <h1>Who lives in my garage?</h1>
            //         <Car brand="Ford" />
            //       </>
            //     );
            //   }
              
            //   const root = ReactDOM.createRoot(document.getElementById('root'));
            //   root.render(<Garage />);


     /////////////////////////////////other props example///////////////////////////////////


//      let books= [
//         {
//             id:1,
//           title:"javascript",
//           author:"vineet",
//           image:"https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Icon.png"
//           },
//           {
//             id:2,
//             image:"https://m.media-amazon.com/images/I/41RlTlmal9L._AC_UY218_.jpg",
//             title:"PHYTHON",
//             author:"Ritesh"
//           },
//           {id:3,
//             image:"https://m.media-amazon.com/images/I/71eZOZvdnnL._AC_UY218_.jpg",
//             title:"REACTJS",
//             author:"VINAY"
//           }
//     ]
    

//     function Booklist(){
//         return  <div className='booklist'>
//               {/* <Book img={firstBook.image} Author={firstBook.author} Title={firstBook.title}/>
//               <Book img={secondBook.image} Author={secondBook.author} Title={firstBook.title}>50%</Book> */}
//               {books.map((book)=>{
//                 return <Book key={book.id} {...book}/>
//               })}
//               </div>
//               ;
//       }


//       const Book=(props)=>{
//         console.log(props);
//         const {image,author,title}=props;
//         return ( 
//         <div className='book' onClick={(e)=>{displayTitle(e)}}>
//           <img src={image}/>
//           <h3 onMouseOver={(e)=>{displayTitle(e)}}>{title}</h3>
//           <h3>{author}</h3>
//           {/* <h3>{props.children}</h3> */}
//         </div>
//         )
// }
    

//         const root=createRoot(document.getElementById('root'));
//         root.render(<BooList/>)



//****************************************HOOKS********************************************************** */
            // Hooks allow us to "hook" into React features such as state and lifecycle methods.
            // Hooks can only be called inside React function components.
            // Hooks can only be called at the top level of a component.
            // Hooks cannot be conditional


            // The React useState Hook allows us to track state in a function component.

            // State generally refers to data or properties that need to be tracking in an application.

//*******************************************useState hook************************************************** */


                // We initialize our state by calling useState in our function component.

                // useState accepts an initial state and returns two values:

                // The current state.
                // A function that updates the state.

                // State Example 1:
                // A theme color, that can be light or dark, according to the hour, can be derived from system data.

                // We can simply get the time (date) from the JS Date function. So we don't need state here, right? 
                // This is a const you can declare with an expression or function that must be evaluated.

                //                 State Example 2:
                // A modal toggle (to show/hide a modal).

                // Modal toggle can be true or false, and it's triggered when the user clicks a button. So, in this 
                // case we really need state, because we can't derive this kind of information – it only depends on 
                // "when and if" the user triggers the event or not.

                // Be mindful of this difference – between what can be derived and what depends on the user.

                // You'll want to use the useState hook when you need to store input from a user.

                // 💡As a rule of thumb, you should only use state to keep this kind of information – that requires the
                //  user to input data, or trigger events.

                // Another very used example is form data. Almost every app or website needs to collect info from the user. 
                // And to do that it's pretty usual (or mandatory) to have a form.

                // Form data must be stored in state, at least until it's persisted to a database. But it can also be retrieved
                //  from a database, and made editable again.

                // Okay, now we know that state doesn't change immediately. And there's another question related to it. What would
                //  happen if you could click the More button 1M times per second?

                // Possibly, at the end of the 1M clicks, the counter would be 999_998 (or less), and not 1_000_000 as expected.

                // To avoid this happening, we can set state in a functional way. We'd grab the value of the previous state, so that 
                // React can properly batch all the requests and update state linearly. This way we wouldn't lose information in the 
                // middle.
                //>>>it rerender when state change
                //>>it store previous state for keeping track of state  
      //////////////////////////////////example of need of useState///////////////////////////
    //   const Counter = () => {
    //     let [value,setValue]=useState(0);
    //     let [Complexvalue,setComplexvalue]=useState(0);
    //   return (<>
    //     <div className="container d-flex align-items-center flex-column">
    //       <h1>Counter</h1>
    //       <h2>{value}</h2>
    //     </div>
    //     <div className='container d-flex justify-content-center'>
    //         <button onClick={()=>{setValue(value--)}} className='btn btn-success  mx-3'>-</button>
    //         <button onClick={()=>{setValue(value++)}} className='btn btn-danger mx-3'>+</button>
    //     </div>
    //     <br/><br/><br/>
    //     <div className="container d-flex align-items-center flex-column">
    //       <h1>Complex Counter</h1>
    //       <h2>{Complexvalue}</h2>
    //     </div>
    //     <div className='container d-flex justify-content-center'>
    //         <button onClick={()=>{
    //             setTimeout(() => {
    //                 console.log("hii--");
    //              setComplexvalue((prevValue)=>{
    //                 return prevValue-1;
    //              });
    //             }, 2000);
    //             }} className='btn btn-success  mx-3'>-</button>
    //         <button onClick={()=>{
    //             console.log("hii++");
    //             setTimeout(() => {
    //                 setComplexvalue((prevValue)=>{
    //                     return prevValue+1;  
    //                 })  
    //             },2000);
    //            }} className='btn btn-danger mx-3'>+</button>
    //     </div>
    
    
    //     </>
    //   )
    // }

//*******************************************useEffect Hooks**************************************** */

                // componentDidMount(){
                //     document.title = `you clicked ${this.state.count} times`;
                //     this.interval = setInterval(this.tick, 1000)
                
                // }
                
                // componentDidUpdate(){
                //     document.title = `you clicked ${this.state.count} times`;
                //     clearInterval(this.interval)
                // }
                // As you observe the code above, we tend to notice that to update the document title we write the same code
                //  twice, once in componentDidmount() and once in componentDidUpdate(). The second thing to observe is how 
                //  the code is split into the component. The code related to the timer, setInterval, and clearInterval which 
                //  are related are put into different code blocks (i.e. different life-cycle methods). The code to update 
                //  the DOM and code for setting up the timer which is completely unrelated are put in the same life-cycle 
                //  method (i.e. in componentDidMount()). It will be much better if there is an option to not repeat code
                //   at the same time group together related codes in the same block. This is where the useEffect Hook comes 
                //   in the picture. 
                // The Effect Hook lets you perform side effects in functional components. It is a close replacement for 
                // componentDidMount(), componentDidUpdate() and componentWillUnmount() method.

                // useEffect after render: We know that, the useEffect() is used for causing side effects in functional 
                // components and it is also capable for handling componentDidMount(), componentDidUpdate() and 
                // componentWillUnmount() life-cycle methods of class based components into functional component. 

                // A functional React component uses props and/or state to calculate the output. If the functional component 
                // makes calculations that don't target the output value, then these calculations are named side-effects.

                // Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(),
                //  and more.

                // The component rendering and side-effect logic are independent. It would be a mistake to perform side-effects
                //  directly in the body of the component, which is primarily used to compute the output.

                // seEffect(callback[, dependencies]);
                // callback is the function containing the side-effect logic. callback is executed right after changes were being
                //  pushed to DOM.
                // dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have 
                // changed between renderings.
                                                
                // Cleanup works the following way:

                // A) After initial rendering, useEffect() invokes the callback having the side-effect. cleanup function is not invoked.

                // B) On later renderings, before invoking the next side-effect callback, useEffect() invokes the cleanup function from the 
                // previous side-effect execution (to clean up everything after the previous side-effect), then runs the current side-effect.

                // C) Finally, after unmounting the component, useEffect() invokes the cleanup function from the latest side-effect.                              
                        

////////////////////////////////example of useEffect,2. Dependencies argument,. Side-effect cleanup*********************
                        


                        // const CleanupEffect = () => {
                        //     let [size,setSize]=useState(window.innerWidth);
                        //     const Checksize=()=>{
                        //         setSize(window.innerWidth);
                        //     }
                        //     useEffect(()=>{
                        //         console.log("hii");
                        //         window.addEventListener('resize',Checksize);
                        //         // return ()=>{
                        //         //     console.log("remove");
                        //         //     window.removeEventListener('resize',Checksize);
                        //         // }
                        //     },[])
                        // return (
                        //     <div>
                        //     <div className='container d-flex flex-column align-items-center'>
                        //     <h1>Window</h1>
                        //     <h2>{size}</h2>  
                        //     </div>
                        //     </div>
                        // )
                        // }


                                  // [............cleanup...............]
                    //     Cleanup works the following way:

                    // A) After initial rendering, useEffect() invokes the callback having the side-effect. cleanup function is not invoked.

                    // B) On later renderings, before invoking the next side-effect callback, useEffect() invokes the cleanup function from 
                    // the previous side-effect execution (to clean up everything after the previous side-effect), then runs the current side-effect.

                    // C) Finally, after unmounting the component, useEffect() invokes the cleanup function from the latest side-effect.

                             // [.............Dependencies argument................]
                    // dependencies argument of useEffect(callback, dependencies) lets you control when the side-effect runs. When dependencies are:

                    // A) Not provided: the side-effect runs after every rendering

                    // B) An empty array []: the side-effect runs once after the initial rendering.

                    // Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs only when any depenendecy value changes.


//********************************************************Multiple Return******************************************* */
                                        // let url="https://api.github.com/users";
                                        // const MultipleReturn = () => {
                                        // let [isLoading,setLoading]=useState(true);
                                        // let [isError,setError]=useState(false);
                                        // let [data,setData]=useState([]);

                                        // useEffect(()=>{
                                        //     fetch(url).then((response)=>{
                                        //         if(response.status>=200&&response.status<=300){
                                        //         return response.json();
                                        //         }
                                        //         throw new Error(response.status+"error occured");
                                        //     } )
                                        //     .then((details)=>{
                                                
                                        //         console.log(details);
                                        //         setLoading(false);
                                        //     details.forEach(element => {
                                        //         setData(element.login); 
                                        //         });
                                                
                                        //     })
                                        //     .catch((e)=>{
                                        //         console.log(e);
                                        //         setLoading(false);
                                        //         setError(true);
                                        //     })
                                        // },[]);
                                        // if(isLoading){
                                        //     return(
                                        //         <div>
                                        //             <h1>Loading....</h1>
                                        //         </div>
                                        //     )
                                        // } 
                                        // if(isError){
                                        //     return(
                                        //         <div>
                                        //             <h1>Error....</h1>
                                        //         </div>
                                        //     )
                                        // }
                                        
                                        //     return(
                                        //         <div>
                                        //             <h1>{data}</h1>
                                        //         </div>
                                        //     )
                                        
                                        
                                        
                                        // }

//*************************************DATA toggling******************************************************** */
                                // const ShortCircuit = () => {
                                //     let [value,setValue]=useState("");
                                //     let [isError,setIsError]=useState(false);
                                // return (
                                //     <>
                                //     <div>
                                //     <h1>{value||"hello world"}</h1>
                                //     </div>
                                //     <div>
                                //         <h1>{!isError?"there is no error":"there is error"}</h1>
                                //     </div>
                                //     <button onClick={()=>{setIsError(!isError)}}>show/hide</button>
                                //     </>
                                // )
                                // }

//*************************************************condition based Component Rendering******************************** */
                // [................first component: todos...............]

                            
            // const Todos = () => {
            
            //     let [todos, setTodos] = useState([
            //         { task: "study", id: 1 },
            //         { task:"Teach",   id:2 }
            //     ]);

            // let [value,setValue]=useState("");
            // const AddData=()=>{
            
            //     let newList=[...todos,{task:value,id:new Date(  )}];
            //     setTodos(newList);
            //     setValue("");
            // }
            //     return (
            //         <div className='container'>
            //             <section>
            //                 <h1>Todos List</h1>
            //                 <form onSubmit={(e)=>{
            //                     e.preventDefault();
            //                     if(value.trim())
            //                     {
            //                         AddData();
            //                     }
            //                     else{
            //                         console.log("Addcorrect Todo");
            //                         }}} className="form-control">
            //             <input type="text" id='add' onChange={(e)=>{setValue(e.target.value)}} value={value}/>
            //                 <button   className="btn btn-primary">Add</button>
            //                 <article>
            //                     <ul>{todos.map((todo) => {
            //                         return (
            //                             <li key={todo.id}><span>{todo.task}</span> &nbsp; &nbsp; &nbsp; &nbsp;
            //                                 <button onClick={() => {
            //                                     let newlist = todos.filter((todoEle) => todoEle.id != todo.id
            //                                     )
            //                                     setTodos(newlist)
                                                    
            //                                 }} className="btn btn-danger">remove</button></li>
            //                         )
            //                     })}</ul>
            //                 </article>
            //             <button onClick={() => { setTodos([]) }} className="btn btn-danger">clear All</button>
            //             </form>
            //             </section>

            //         </div>
            //     )
            // }

                    //   [..........second component: window size changer............]

                    // const WindowSizeChanger = () => {
                    //     let [size,setSize]=useState(window.innerWidth);
                    //     const Checksize=()=>{
                    //         setSize(window.innerWidth);
                    //     }
                    //     useEffect(()=>{
                    //         console.log("hii");
                    //         window.addEventListener('resize',Checksize);
                    //         return ()=>{
                    //             console.log("remove");
                    //             window.removeEventListener('resize',Checksize);
                    //         }
                    //     },[])
                    //   return (
                    //     <div>
                    //     <div className='container d-flex flex-column align-items-center'>
                    //     <h1>Window</h1>
                    //     <h2>{size}</h2>  
                    //     </div>
                    //     </div>
                    //   )
                    // }

            //    [.................swiching component: app................]     

                        // const App = () => {
                        //     let [switchIt,setSwitch]=useState(true);
                            
                        // return (
                        //     <>
                        //     <button onClick={()=>{
                        //         setSwitch(!switchIt);
                        //     }} className="btn btn-success">Toggle</button>
                        //     {switchIt? <Todos/>:<WindowSizeChanger/>}
                        //     </>
                        // )
                        // }
            
//******************************************Controlled Input****************************************** */

        //    It is basically means that we are linking our imput field with useState hook 
        //    and applying on change event for listing the change and set the value of input
        //    using usestate callback function;


        ///////////////////////////////example for controlled Input///////////////////////////////////
        // const ControlledInput = () => {
        //         let [name,setName]=useState("");
        //         let [email,setEmail]=useState("");
        //         let [person,setPerson]=useState([]);
        //         const handlesubmit=(e)=>{
        //             e.preventDefault();
        //             let newpeople={name,email,id:new Date().getTime().toString()};
        //             setPerson((prevPerson)=>{
        //                 return [...prevPerson,newpeople];
        //             })
        //         }
        //       return (
        //         <div className='container'>
        //             <form className='form' onSubmit={handlesubmit}>
        //                 <div className='form-control'>
        //                <label htmlFor='firstName'>Name:</label>
        //                <input onChange={(e)=>{
        //            setName(e.target.value);
                    
        //             }} value={name}  type="text" name='firstName' id="firstName"/>
        //                <label htmlFor='email'>Email:</label>
        //                <input onChange={(e)=>{
                    
        //             setEmail(e.target.value);
        //             }} value={email} type="email" name='email' id="email"/>
        //                </div>
        //                <button className="btn btn-ptimary">Add person</button>
        //             </form>
        //           <div>
        //             {person.map((people)=>{
        //                 return (
        //                 <div key={people.id} className='d-flex justify-content-between'>
        //                     <span>{people.name}</span><span>{people.email}</span>
        //                 </div>
        //                 )
        //             })}
        //           </div>
        //         </div>
        //       )
        //     }

//********************************************useRef hook**************************************************************** */
                        //  [>>>>>>useState AND useEffect<<<<<<}
                        //     >>>useState<<<  
                //>>>it rerender when state changes
                //>>it store previous state for keeping track of state 

                // const UseRefExample = () => {
                //         let [count,setCount]=useState(0);
                //         useEffect(()=>{
                //             setCount(count+1);
                //         })
                //       return (
                //         <div>
                //           <h1>count:{count}</h1>
                //         </div>
                //       )
                //     }
                // in this code snippet it is rendering infinte because 
                // for every setCount it rendered and useEffect automatically
                // run because of sideeffect and it again setCount by 1 again 
                // state change it rendered again useEffect automatically run
                // and setcount by 1 ....so it goes in loop

                // means for every state change =>{useState will rendered}
  
                        // >>>>>>>>>>>>>useRef<<<<<<<<<<<
                
                 // so it is used when we want to keep track of value but not want 
                // rendered everytime
                // The useRef Hook allows you to persist values between renders.

                // It can be used to store a mutable value that does not cause a re-render when updated.
                
                // It can be used to access a DOM element directly.

                // const UseRefExample = () => {
                //         let [count,setName]=useState("");
                //         let counterRender=useRef(0);
                //         useEffect(()=>{
                //             console.log(counterRender);
                //             counterRender.current=counterRender.current+1;
                //         })
                //       return (
                //         <div>
                //           <h1>count:{counterRender.current}</h1>
                //           <form>
                //             <div>
                //                 <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
                //             </div>
                //           </form>
                //         </div>
                //       )
                //     }
                // in above we are keeping track of previous value using useRef 
                //so when change in any input using usestate it will make render
                // and by using useRef we are keeping track of previous state that why we are able to See 
                // how many time it was rendered  but in this we are not in lopp bcz useRef only keep 
                // track of state not re-rendered every time;
                // but if we are using useEffect instead of useRef it will 
                // be go in loop because it also rendered when state change.
                                
                                // const UseRefExample = () => {
                                //         let [count,setName]=useState("");
                                //         let counterRender=useRef(0);
                                //         let inputRefernce=useRef("");
                                //         useEffect(()=>{
                                //             console.log(counterRender,inputRefernce);
                                //             counterRender.current=counterRender.current+1;
                                //         })
                                //       return (
                                //         <div>
                                //           <h1>count:{counterRender.current}</h1>
                                //           <form className='form' onSubmit={(e)=>{
                                //             e.preventDefault();
                                //             console.log(inputRefernce.current.value);
                                //           }}>
                                //             <div>
                                //                 <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
                                //                 <input tpe="text" ref={inputRefernce}/>
                                //             </div>
                                //            <button className="btn btn-primary">add</button>
                                //           </form>
                                //         </div>
                                //       )
                                //     }
                    
               //in this we have a ref to dom element which is input means uncontrolled input
               //we are printing the value of input in console 
               //so it is feature of useRef It can be used to access a DOM element directly.
               

                        //        useEffect(()=>{
                        
                        //         inputRefernce.current.focus();
                                
                        //           })

               //we can use like focusing on input element in the form
               //so we have a ref to input field that why we are able to focs 
               // on that Dom element

//********************************************useReducer Hook******************************************** */
               
                                // first underStand useState with example

        //     import React,{useState} from 'react'
        //      const App=()={
        //         const[count,setCount]=useState(0);
        //         return(
        //                 <>
        //                 <div>
        //                 <p>{count}</p>
        //                 <div className='btn'>
        //                 <button onClick={()=>setCount(count+1)}>Inc</button>
        //                 <button onClick={()=>setCount(count-1)}>Inc</button>
        //                 </div>
        //                 </div>
        //                  </>

        //         )
        //      }


        //       in this above code   we have keeping track of multiple pieces of state that rely on complex logic




       
                            /////////////useReducer//////////////////////
       


        //   The useReducer Hook is similar to the useState Hook.

        //  It allows for custom state logic.

        // If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

        // The useReducer Hook accepts two arguments.   

        //    useReducer(<reducer>, <initialState>)  reducer fuction and initialState

        // The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object.

        // The useReducer Hook returns the current stateand a dispatchmethod.




                                        // import React, { useReducer } from 'react'
                                        // const initialState=0;

                                        // const reducer=(state,action)=>{
                                        // console.log(state,action);
                                        // if(action.type==="INC"){
                                        // return  state+1;
                                        // }
                                        // if(action.type==="DEC"){
                                        // return  state-1;
                                        // }
                                        // return state;
                                        // }

                                        // const UseReducerSimpleExampl = () => {
                                        // const [state,dispatch]=useReducer(reducer,initialState);
                                        // return (
                                        // <div>
                                        // <p>{state}</p>q
                                        // <button onClick={()=>dispatch({type:"INC"})} className="btn btn-primary">Inc</button>
                                        // <button onClick={()=>dispatch({type:"DEC"})} className="btn btn-primary">DEC</button>
                                        // </div>
                                        // )qq
                                        // }
                                        
                                        // export default UseReducerSimpleExampl

                //Here reducer is the user-defined function that pairs the current state with the dispatch method to handle the state

                // whenever someone called dispatch function it  will call the reducer function and specify what action to be performed
                //dispatch function take and object with the action type and payload object
                // these are fetch by action properties in reducer function


        ///////////////////////////////////////////////////Another complex Example for useReducer/////////////////////////////////////
                                        
             //reducerFunction                  // export const reducer=(state,action)=>{
                                                //         console.log(state,action);
                                                //         if(action.type==="ADD_PERSON"){
                                                //         return {...state,
                                                //         person:[...state.person,{id:new Date().getTime().toString(),name:action.payload}],
                                                //         IsModalDisplay:true,
                                                //         ModalMsg:"Person ADDED"
                                                //         }
                                                //         }
                                                //         if(action.type==="INVALID_INPUT"){
                                                //         return {...state,
                                                        
                                                //         IsModalDisplay:true,
                                                //         ModalMsg:"Name Is Required"
                                                //         }
                                                //         }
                                                //         if(action.type==="REMOVE"){
                                                //         const newPerson=state.person.filter(people=>people.id!==action.payload);
                                                //         return {...state,
                                                //         person:newPerson,
                                                //         IsModalDisplay:true,
                                                //         ModalMsg:"Person Removed"
                                                //         }
                                                //         }
                                                //         if(action.type==="CLOSE"){
                                                //         return { ...state,IsModalDisplay:false}
                                                //         }
                                                        
                                                // throw  new Error("Action Not found");
                                                // }

                                                

              
        //       modal component 
        //       where we are using
        //          props                      // import React, { useEffect } from 'react'

                                                // const ModalForReducer = ({msg,closeModal}) => {
                                                // useEffect(()=>{
                                                //         setTimeout(closeModal,3000);
                                                // })
                                                // return (
                                                // <div>
                                                // <h3> {msg}</h3>
                                                // </div>
                                                // )
                                                // }

                                                // export default ModalForReducer;


        //       here we are using 
        //       reducer and defining
        //       the action type in
        //       dispatch method to handle
        //       the state              //        import React, { useReducer, useState } from 'react'
                                        //         import ModalForReducer from './ModalForReducer';
                                        //         import {reducer} from "./reducer"

                                        //         const UseReducerExample = () => {
                                        //         const [name,setName]=useState("");
                                                
                                        //         const closeModal=()=>{
                                        //         dispatch({type:"CLOSE"})
                                        //         }

                                        //         const initialState={
                                        //                 person:[],
                                        //                 IsModalDisplay:false,
                                        //                 ModalMsg:"hello world"
                                        //         }


                                        //         const [state,dispatch]=useReducer(reducer,initialState);

                                        //         return (
                                        //         <div>
                                        //                 {state.IsModalDisplay&&<ModalForReducer msg={state.ModalMsg} closeModal={closeModal}/>}
                                                        
                                        //         <form onSubmit={(e)=>{
                                        //                 e.preventDefault();
                                        //                 if(name){
                                        //                         dispatch({type:"ADD_PERSON",payload:name});
                                        //                         setName("");
                                                        
                                        //                 }
                                        //                 else{
                                        //                         dispatch({type:"INVALID_INPUT"})
                                        //                 }
                                                        
                                        //                 }}>
                                        //                 <input type="text" value={name} onChange={(e)=>{
                                        //                 setName(e.target.value);
                                        //                 }}/>
                                        //                 <button className="btn btn-success" >Add</button>
                                        //         </form>
                                        //         <section>
                                        //                 {  state.person.map(people=>{
                                        //                 return <h1 key={people.id}><span>{people.name}</span>
                                        //                 <span><button onClick={(e)=>{
                                        //                 dispatch({type:"REMOVE",payload:people.id})
                                        //                 }} className="btn btn-danger">Remove</button></span></h1>
                                        //                 })}
                                        //         </section>
                                        //         </div>
                                        //         )
                                        //         }

                                        //         export default UseReducerExample;


//*********************************************Context API in React************************************** */
               
                // React Context API is a way to essentially create global variables that can be passed around in 
                // a React app. This is the alternative to "prop drilling", or passing props from grandparent to
                //  parent to child, and so on. Context is often touted as a simpler, lighter solution to using
                //   Redux for state management.

                // In a typical React application, data is passed top-down (parent to child) via props, but this
                // can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are
                // required by many components within an application. Context provides a way to share values
                // like these between components without having to explicitly pass a prop through every level of the tree.


                        //////////////props Drilling Example///////////


                        // import ContextApi from './AdvancedReact/contextApi/ContextApi';
                        
                        // const root=createRoot(document.getElementById('root'));
                        // root.render(<ContextApi/>);



                        //                         import React from 'react';
                        //                         import CompA from './CompA';

                        //                         const ContextApi = () => {
                        //                         const channel="CODING";
                        //                         return (
                                                
                        //                         <CompA channel={channel}/>
                                                
                        //                         )
                        //                         }
                        //                         export default ContextApi



                        // import React from 'react';
                        // import CompB from './CompB';

                        // const CompA = ({channel}) => {
                        // return (
                        
                        // <CompB channel={channel}/>
                        
                        // )
                        // }
                        // export default CompA


                        //                                 import React from 'react'
                        //                                 import CompC from './CompC'
                        //                                 const CompB = ({channel}) => {
                        //                                 return (
                                                        
                        //                                 <CompC channel={channel}/>
                                                        
                        //                                 )
                        //                                 }
                        //                                 export default CompB


                        //  import React from 'react'
                        //  const CompC = ({channel}) => {
                        // return (
                        // <div>
                        // <h1>Hello ! Welcome to {channel} Channel</h1>
                        // </div>
                        // )
                        // }

                        // export default CompC

          ///////////////////this above code  is propsdrillig   this can be solve by Context api////////////////



                        // import ContextApi from './AdvancedReact/contextApi/ContextApi';
                         // const root=createRoot(document.getElementById('root'));
                        // root.render(<ContextApi/>);



                                        //      import React, { createContext } from 'react';
                                        //          import CompA from './CompA';
       //  passing value using
        //  context ContextApi
        //  from greatGrandparent 
        //  to grandchild
        //  we skip compA and compB         
                                        //        const  channel=createContext();
                                        //         const ContextApi = () => {
                                        //         return (
                                        //         <channel.Provider value={"CODING"} >
                                        //         <CompA />
                                        //         </channel.Provider>
                                        //         )
                                        //         }

                                        //         export default ContextApi;
                                        //         export {channel};
                                        //            ||
                                        //            ||
                                        //            ||
                                        //            ||
                                        //            ||

                                                //    import React from 'react'
                                                //    import { channel } from './ContextApi'
                                                   
                                                //    const CompC = () => {
                                                //      return (
                                                //        <channel.Consumer>
                                                //          {(channel)=>{
                                                //            return <h1>Hello ! Welcome to {channel} Channel</h1>
                                                //          }}
                                                //          </channel.Consumer>
                                                //      )
                                                //    }
                                                   
                                                //    export default CompC       

             ////////////////////but in this there is problem like callbackhell if we want to provide multiple value 
             //////////////////////this become massy and diffiult to manage ////////////code below

                        // import ContextApi from './AdvancedReact/contextApi/ContextApi';
                         // const root=createRoot(document.getElementById('root'));
                        // root.render(<ContextApi/>);




                                // import React, { createContext } from 'react';
                                // import CompA from './CompA';
                                
                                // const  channel=createContext();
                                // const  Greeting=createContext();
                                // const ContextApi = () => {
                                
                                // return (
                                // <channel.Provider value={"CODING"} >
                                // <Greeting.Provider  value={"Thank you"}>
                                // <CompA />
                                // </Greeting.Provider>
                                // </channel.Provider>
                                // )
                                // }

                                // export default ContextApi;
                                // export {channel,Greeting};

                              
                                //    ||
                                //    ||
                                //    import React from 'react'
                                // import { channel,Greeting } from './ContextApi'

                                // const CompC = () => {
                                // return (
                                // <>
                                // <channel.Consumer>
                                // {(channel)=>{
                                //         return (
                                //         <Greeting.Consumer>
                                //                 {(greeting)=>{
                                //                 return(
                                //                 <h1>Hello ! Welcome to {channel} Channel.{greeting} for reaching us</h1>
                                //                 )
                                //                 }}
                                //         </Greeting.Consumer>
                                //         )
                                // }}
                                // </channel.Consumer>
                                // </>
                                // )
                                // }

                                // export default CompC


        //////this above problem code is solve by UseContextApi///////////////////////
                                          

                                // import React, { createContext } from 'react';
                                // import CompA from './CompA';
                                
                                // const  channel=createContext();
                                // const  Greeting=createContext();
                                // const ContextApi = () => {
                                
                                // return (
                                // <channel.Provider value={"CODING"} >
                                // <Greeting.Provider  value={"Thank you"}>
                                // <CompA />
                                // </Greeting.Provider>
                                // </channel.Provider>
                                // )
                                // }
                                // export default ContextApi;
                                // export {channel,Greeting};

                                //      ||
                                //      ||
                                //      ||
                               
                               
                                //      import React, { useContext } from 'react'
                                //      import { channel,Greeting} from './ContextApi'
                                     
                                //      const CompC = () => {
                                //        const Channel=useContext(channel);
                                //        const greeting=useContext(Greeting);
                                //        return (
                                //         <h1>Hello ! Welcome to {Channel} Channel.{greeting} for reaching us</h1>
                                //         )
                                //      }
                                //      export default CompC           

//*********************************************************Custom Hook******************************************************** */
                   

                // Hooks are reusable functions.
               // When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
               // Custom Hooks start with "use". Example: useFetch.
               // The fetch logic may be needed in other components as well, so we will extract that into a custom Hook.
               // Move the fetch logic to a new file to be used as a custom Hook:
                      

                //                                 import { useState,useEffect } from "react"

                //                                 const UseFetch = (url) => {
                //                                 const [data,setData]=useState([]);
                //   logic needed in 
                //   other components                useEffect(()=>{
                //                                         fetch(url)
                //                                         .then((res)=>res.json())
                //                                         .then((data)=>setData(data));
                //                                 })
                //                                         return [data];
                //                                 }
                //                                 export default UseFetch;





                //                                 import React, { useContext } from 'react'
                //                                 import UseFetch from './UseFetch'
                //                                 import CompB from './CompB'

                //                                 const CompA = () => {
                //                                 const [data]=UseFetch("https://api.github.com/users");
                // compA                           
                //                                 return (
                //                                 <>
                //                                 <h1>UserName List That Are Enrolled</h1>
                //                                 <ul>
                //                                 {  data&&data.map((user)=>{
                //                                 return <li key={user.id} >{user.login}</li>
                //                                 })}
                //                                 </ul>
                //                                  <CompB/>
                //                                 </>
                //                                 )
                //                                 }

                //                                 export default CompA




                //                         import React from 'react'
                //                         import UseFetch from './UseFetch'

                //                         const CompB = () => {
                //                         const [data]=UseFetch("https://jsonplaceholder.typicode.com/todos");
                // compB
                //                         return (
                //                         <div>
                //                                 <h1>This is List of Title</h1>
                //                                 <ul>
                //                                 {data&&data.map((item)=>{
                //                                 return <li key={item.id}>{item.title}</li>
                //                                 })}
                //                                 </ul>
                //                         </div>
                //                         )
                //                         }

                //                         export default CompB


//*************************************************************UseMemo****************************************************** */

                // let create a situation first where there an expensive function that runs on every render.
                // you will notice a delay in execution.


                                        // import React, { useState } from 'react'

                                        // const UseMemoBasicExample = () => {
                                        // const [counterOne,setCounterOne]=useState(0);
                                        // const[counterTwo,setCounterTwo]=useState(0);
                                        
                                        // const IncOne=()=>{
                                        //         setCounterOne(counterOne+1);
                                        // }
                                        // const IncTwo=()=>{
                                        //         setCounterTwo(counterTwo+1);
                                        // }
                                        // const isEven=()=>{
                                        //         console.log("complex calc");
                                        //         let i=0;
                                        //         while(i<2000000000) i++;
                                        //         return counterOne%2==0;
                                        // }

                                        // return (
                                        // <div>
                                        // <button onClick={IncOne} className="btn btn-success">CounterOne-{counterOne}</button>
                                        // <span>{isEven()?"Even":"odd"}</span>
                                        // <button onClick={IncTwo}  className="btn btn-success">CounterTwo-{counterTwo}</button>
                                        // </div>
                                        // )
                                        // }

                                        // export default UseMemoBasicExample


                        // in this above code  when we click on CounterOne button it show the counter value bcz the state 
                        //is change so render happen 
                        // in isEven func thereis while loop and we are passing the counterOne value so when we click on
                         //we get the ans is odd or even
                        // counterOne btn  will take time bcz when state change render happen  line by line rendering is done
                        //isEven func have   complex calculation it will take time 
                        // but as we click on  countertwo button we also get the same response bcz this calculation is somehow 
                        // effecting others also bcz when state change render happen and rendering line by line so CounterTwo take
                        //same time
                        // thats why we use UseMemo hook for not doing recalculation



                        // import React, { useState ,useMemo} from 'react'

                        // const UseMemoBasicExample = () => {
                        // const [counterOne,setCounterOne]=useState(0);
                        // const[counterTwo,setCounterTwo]=useState(0);
                        
                        // const IncOne=()=>{
                        //         setCounterOne(counterOne+1);
                        // }
                        // const IncTwo=()=>{
                        //         setCounterTwo(counterTwo+1);
                        // }

                        // const isEven= useMemo(()=>{
                        //         console.log("complex calc");
                        //         let i=0;
                        //         while(i<2000000000) i++;
                        //         return counterOne%2==0;
                        // },[counterOne])
                        

                        // return (
                        // <div>
                        // <button onClick={IncOne} className="btn btn-success">CounterOne-{counterOne}</button>
                        // <span>{isEven?"Even":"odd"}</span>
                        // <button onClick={IncTwo}  className="btn btn-success">CounterTwo-{counterTwo}</button>
                        // </div>
                        // )
                        // }

                        // export default UseMemoBasicExample

                        
          // To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will 
         // cause the function to only run when needed.
         //so we prodive depencies of counterOne state in useMemoHook if there is change on state of counterOne btn
         //only that time render happpen  so counterOne button    when clicked it will take time but  when counterTwo btn
         // clicked it will not take that much time,
         //bcz counterOne value is not change so isEven function not called
         //  We can wrap the expensive function call with useMemo.
         // The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its
        //  dependencies have changed.
        //useMemo hook return the memoised value which is not provided by useState hook

               
                                              
       
       
        // suppose there is component betwween 
        // these like ChildA so we can apply 
        // useMemo to that comp also bcz at every
        // time when one the button state change 
        // render happen and if we are not using
        // use memo here we can apply direct to
        // comp also                               // return (
                                                // <div>
                                                // <button onClick={IncOne} className="btn btn-success">CounterOne-{counterOne}</button>
                                                // <span>{isEven?"Even":"odd"}</span>
                                                //</ChilldA/>
                                                // <button onClick={IncTwo}  className="btn btn-success">CounterTwo-{counterTwo}</button>
                                                // </div>
                                                // )

                // like this=>
                //           ||
                //         import { memo } from "react"
                //         import React from 'react'
                //         const ChildA = () => {
                //         console.log("child element");
                //         return (
                //         <div>
                //         </div>
                //         )
                //         }
                //         export default memo(ChildA)

//*************************************************UseCallback Hook************************************************ */

                                        // import React, { useState } from 'react'
                                        // import ChildA from './ChildA';

                                        // const UseCallBackDemo = () => {
                                        // const [count,setCount]=useState(0);
                                        // const myFunc=()=>{
                                        // //some code here
                                        // }
                                        
                                        // return (
                                        // <div>
                                        // <button onClick={()=>{setCount(count+1)}} className="btn btn-success">InC</button>
                                        // <p>{count}</p>
                                        // <ChildA myFunc={myFunc}/>
                                        // </div>
                                        // )
                                        // }
                                        // export default UseCallBackDemo


                                

                                        // import { memo } from "react"
                                        // import React from 'react'
                                        
                                        
                                        // const ChildA = ({myfunc}) => {
        //                              // console.log("child element");
        //   ChildA comp                //   return (
        //                              //     <div>
                                              
                                        //     </div>
                                        //   )
                                        // }
                                        // export default memo(ChildA)
                
                // Here as we are using memo in ChildA component but when we clicking on 
                // Inc button "childElement " log everytime ..because we are passing func
                // as props so at the time of Inc button click state changed render happen 
                // and as we know we have not proviede the defination to myfunc func but 
                // when render happen bcz of state change and we passing func to ChildA as
                // props,so everytime when render happen it is thinking there might be some 
                // changes in this function; even though no value is changed in that func




                                //  import React, { useCallback, useState } from 'react'
                                // import ChildA from './ChildA';

                                // const UseCallBackDemo = () => {
                                // const [count,setCount]=useState(0);
                                // const [count1,setCount1]=useState(0);
                                // const myFunc=useCallback(()=>{
                                // //some code here
                                // return ()=>{
                                //         //some code
                                // }
                                // },[count1]);
                                
                                // return (
                                // <>
                                // <div>
                                // <button onClick={()=>{setCount(count+1)}} className="btn btn-success">InC</button>
                                // <p>{count}</p>
                                // <ChildA myFunc={myFunc}/>
                                
                                // <button onClick={()=>{setCount1(count1+1)}} className="btn btn-success">InCrease</button>
                                // <p>{count1}</p>
                                // </div>
                                // </>
                                // )
                                // }
                                // export default UseCallBackDemo



//                                 import { memo } from "react"
//                                 import React from 'react'

//       childA component
//                                 const ChildA = ({myfunc}) => {
//                                 console.log("child element");
//                                 return (
//                                 <div>
                                
//                                 </div>
//                                 )
//                                 }
//                                   export default memo(ChildA)


                        // In this above code we are  using callbackHook which returned the memoised func
                        // and we set the depencies on count1 state which is InCrease button  so  ChildA 
                        // Component is log"child Element" everytime only when count1 state changed if we
                        // provide [] empty dependies so it render only once at intial start;


//****************************************************REDUX***************************************************** */
                // Action Creator  ==>  Action       ==> dispatch       ==>  Reducers        ==> store

                //         You     ==> Booking form  ==>  Submit Form   ==>  Ticket Counters ==> Railway cental Store
                      

                // 1>Action ====what to do (like inc or dec);
                // 2>Reducer=====How to do  (it contain state and action)
                // 3>Store======object which hold the state of application
                // 4>function=====createStore() dispatch(action)  getSate()
                //   associated
                //   with store

        //>>>>>>// 1>Action 
                //  pure Object
                //  Action are plaiin js objext that have a type field
                //  Actions only tell what to do ,but they don't tell how to do

                //  return{
                //         type:"INCREMENT",
                //         payload:num
                //  }

        //>>>>>>// 1.1>Action creater 
                // purefunction which creates an Action

                // export const incNumber=(num)=>{
                //         return{
                //                 type:'INCREMENT',
                //                 payload:num
                //         }
                // }

        //>>>>>>>//2> Reducer
                //  Reducers are functions that take the currentState
                //  And an action as arguments a new State result
                 
                // const initialState=0;

                // const changeTheNumber=(state=initialState,action)=>{
                //         switch (action.type) {
                //                 case "INCREMENT":
                //                        return state+action.payload;
                //                 case "DECREMENT":
                //                         return state-1
                //                 default:return state
                                   
                //         }
                // }

         //>>>>>>//3>Store
                //the redux store brings together the state actions and reducers
                //that make up your app        
                //it is important to note that you will only have a single store in
                //a redux application
                //every redux store has a single root reducer function

                // import {CreateStore} from 'redux'
                // const store =CreateStore(rootReducers)


                              ////REDUX properties//////

                // >>the global state of your applicaton is stored as an object inside
                // a single store

                //>>state is read only way to change the sate is to dispatch an action

                //>>Immutability,one-way data flow, predicatbility of outcome

                //>>changes are made with pure Reducer functions


