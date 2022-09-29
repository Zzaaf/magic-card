/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

function Card({ counter }) {
  return (
    <Layout>
      <div className="card">
        Magic card has been downloaded {counter} times
      </div>
    </Layout>
  );
}

module.exports = Card;
