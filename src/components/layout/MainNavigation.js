import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>OMDB DEMO</div>
    </header>
  );
}

export default MainNavigation;
