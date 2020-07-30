import React from 'react';
import './App.css';

function App() {
    return (
        <div className='App'>
            <header>
                <ul>
                    <li>
                        <a href='/'>Link 1</a>
                    </li>
                    <li>
                        <a href='/'>Link 2</a>
                    </li>
                    <li>
                        <a href='/'>Link 3</a>
                    </li>
                    <li>
                        <a href='/'>Link 4</a>
                    </li>
                    <li>
                        <a href='/'>Link 5</a>
                    </li>
                </ul>
            </header>
            <main>
                <section className='card-container'>
                    <article className='card-item'>
                        <img
                            src='https://via.placeholder.com/250'
                            alt='placeholder-item'
                        />
                    </article>
                    <article className='card-item'>
                        <img
                            src='https://via.placeholder.com/250'
                            alt='placeholder-item'
                        />
                    </article>
                    <article className='card-item'>
                        <img
                            src='https://via.placeholder.com/250'
                            alt='placeholder-item'
                        />
                    </article>
                    <article className='card-item'>
                        <img
                            src='https://via.placeholder.com/250'
                            alt='placeholder-item'
                        />
                    </article>
                    <article className='card-item'>
                        <img
                            src='https://via.placeholder.com/250'
                            alt='placeholder-item'
                        />
                    </article>
                    <article className='card-item'>
                        <img
                            src='https://via.placeholder.com/250'
                            alt='placeholder-item'
                        />
                    </article>
                </section>
            </main>
        </div>
    );
}

// eslint-disable-next-line import/no-default-export
export default App;