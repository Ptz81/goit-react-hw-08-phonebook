import css from './pages.module.css'
export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome to Contact Book page!
      </h1>
    </div>
  );
}
