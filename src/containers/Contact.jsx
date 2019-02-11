import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact-form">
        <h2 className="title">お問い合わせ</h2>
        <p>メールアドレス</p>
        <input />
        <p>お問い合わせ内容</p>
        <textarea></textarea>
        <p><input className='submit' type="submit" /></p>
      </div>
    );
  }
}

const mapStateToProps = ({tasks}) => ({
  tasks:tasks.tasks
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
