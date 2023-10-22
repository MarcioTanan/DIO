package one.digitalinnovation.gof.singleton;

/**
 * Singleton "apressado".
 * 
 * @author Marcio Tanan
 */
public class SingletonEager {

	private static SingletonEager instancia = new SingletonEager();
	
	private SingletonEager() {
		super();
	}
	
	public static SingletonEager getInstancia() {
		return instancia;
	}
}
