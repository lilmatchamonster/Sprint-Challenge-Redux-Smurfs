1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map(), reduce(), and filter()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are like labels that pass the name of the action type and whatever information is needed for that action to take place. That action is then passed to the reducers that evaluate the action and pass a new updated object based on the action information to the store. The store holds the application's "global state" that is updated by the reducer(s) via actions. The store is called the 'single source of truth" because that is where all the state information is held that can be accessed by each component via connect which is used in maping the available state info to the props that are given to the components.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is accessible by all the components and component state is only accessable to that individual component with the possibility of passing some props to it's "nested" components.

4.  What is middleware?

Middleare allows us to interrupt the information being passed to the reducer, do something to it (ex: logger or thunk) and before sending it on to the reducer. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allow redux to preform asynchronized functions like when we are dealing with AJAX and promises.
Thunk makes this possible by making it so an action creator can return a function instead of the usual action object. The action then is evaluated by thunk before being passed to the reducer. Thunk is a type of middleware.

6.  Which `react-redux` method links up our `components` with our `redux store`?

That connect which is imported from react-redux. It takes in a mstp function, an action creator, and the component that is being linked.
