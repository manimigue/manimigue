import React from 'react';

const Contact = () => {
  return (
    <div className="contact-form">
      <h2 className="title">お問い合わせ</h2>
      <form method="POST" action="https://formspree.io/manimigue0701@gmail.com">
        <p>お名前</p>
        <input type='text' name='お名前' placeholder="佐藤　太郎" />
        <p>メールアドレス</p>
        <input type="email" name="返信先" placeholder="you@example.com"/>
        <p>お問い合わせ内容</p>
        <textarea name='お問い合わせ内容'></textarea>
        <input className='submit' type="submit" value='Send'/>
      </form>
    </div>
  )
}

export default Contact
