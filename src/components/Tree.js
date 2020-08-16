import React from 'react';

export class Person {
  /**
   * Initialize a new instance of Person class
   * @param {string} firstname The person's firstname
   * @param {string} lastname The person's lastname
   * @param {Person} spouse The person's spouse reference
   */
  constructor(firstname = '', lastname = '', spouse = null) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.spouse = spouse;
    if (spouse)
      spouse.spouse = this;
  }

  /**
   * Returns a new instance of Person class built on the given JSON data
   * @param {{ firstname: string, lastname: string }} json The JSON data
   */
  static fromJson(json) {
    return new Person(json.firstname, json.lastname);
  }

  /**
   * String representation of the object
   * @returns {string}
   */
  toString() {
    return `${this.firstname} ${this.lastname}`;
  }
}

/**
 * Tree component
 * @param {React.Props} props
 */
function Tree(props) {
  return (
    <div className="Tree">
      {props.tree[0].father.firstname}
    </div>
  );
}

export default Tree;