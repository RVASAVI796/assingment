import java.util.HashMap;
public class IDandPassword{

    HashMap<String,String> logininfo = new HashMap<String,String>();

    IDandPassword(){

        logininfo.put("Bro","pizza");
        logininfo.put("Brometheus","PASSWORD");
        logininfo.put("BroCode","abc123");
    }

    public HashMap getLoginInfo(){
        return logininfo;
    }
}
