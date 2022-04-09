import css from './CreatePizza.module.css'

export default function CreatePizza() {
  return (
    <div className='container'>
      <div className={css.createPizza}>
        <h1>Create New Item</h1>
        <h3>Image</h3>
        <div className={css.imgWrapper}>
          <img className={css.img} src="https://cdn-icons.flaticon.com/png/512/4718/premium/4718232.png?token=exp=1649497092~hmac=ab1bfb2868ffb714f3e15664a2f75286" alt="#" />
        </div>
        <h3>Name</h3>
        <input className={css.input} type="text" placeholder='Pizza' />
        <h3>Price</h3>
        <input className={css.input} type="text" placeholder='$ 6' />
        <h3>Description</h3>
        <textarea className={css.input} cols="30" rows="10"></textarea>
      </div>
    </div>
  )
}
