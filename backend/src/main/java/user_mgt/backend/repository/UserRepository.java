//UserRepository.java
package user_mgt.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import user_mgt.backend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{ }
