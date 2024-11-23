package it.unito.iumtweb.springboot.stadium;

//@todo annotate with entites
public class Stadium {
    private String name;

    private String location;

    public Stadium() {
    }

    public Stadium(String name, String location) {
        this.name = name;
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
