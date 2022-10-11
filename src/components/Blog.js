import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/5 mx-auto my-10'>
            <div className='mb-5'>
                <h2 className='text-xl font-semibold'>What is the purpose of react router?</h2>
                <p>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>
            </div>
            <div className='mb-5'>
                <h2 className='text-xl font-semibold'>How does context API works?</h2>
                <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
            </div>
            <div>
                <h2 className='text-xl font-semibold'>What is useref hook and how is it work?</h2>
                <p>The useRef Hook lets us create mutable variables inside functional components. There are three main key points that you should keep in mind when using the useRef Hook: A ref created with useRef will be created only when the component has been mounted and preserved for the full lifecycle.</p>
            </div>
        </div>
    );
};

export default Blog;