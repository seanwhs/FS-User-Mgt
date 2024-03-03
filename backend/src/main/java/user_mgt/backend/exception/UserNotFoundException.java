//UserNotFoundException.java
package user_mgt.backend.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not found the user with id "+ id);
    }
}