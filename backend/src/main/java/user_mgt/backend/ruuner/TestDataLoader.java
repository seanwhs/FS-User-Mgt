//TestDataLoader.java
package user_mgt.backend.ruuner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import user_mgt.backend.model.User;
import user_mgt.backend.repository.UserRepository;

@Component
public class TestDataLoader implements CommandLineRunner {

    private final UserRepository userRepository;

    public TestDataLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Load test data
        loadTestData();
    }

    private void loadTestData() {
        // Add test users
        User user1 = new User("user1", "User One", "user1@example.com");
        User user2 = new User("user2", "User Two", "user2@example.com");
        User user3 = new User("user3", "User Three", "user3@example.com");

        // Save users to the database
        userRepository.save(user1);
        userRepository.save(user2);
        userRepository.save(user3);

        System.out.println("Test data loaded successfully.");
    }
}
