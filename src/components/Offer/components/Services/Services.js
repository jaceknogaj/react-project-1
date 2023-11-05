import styles from "./Services.module.css";

function Services({ offer }) {
  return (
    <li class={styles.service} key={offer.id}>
      <h3 class={styles.serviceTitle}>{offer.name}</h3>
      {offer.isNew ? (
        <>
          <p className={styles.serviceNew}>(nowość)</p>
          <div className={styles.serviceDot}></div>
        </>
      ) : null}
    </li>
  );
}

export default Services;
