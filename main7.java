public class main7 {

    public static void main(String[] args) {

        IDandPassword IDandPassword= new IDandPassword();

        LoginPage loginPage = new LoginPage(IDandPassword.getLoginInfo());
    }
}

