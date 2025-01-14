package it.unito.ium_tweb.Superpower;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SuperpowerRepository extends JpaRepository<Superpower, Long> {
}
