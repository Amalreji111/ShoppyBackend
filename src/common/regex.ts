

export class Regex {

    public static get PHONE_NUMBER() :string { return "^(\\+\\d{1,2}\\s?)?1?\\-?\\.?\\s?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s" + ".-]?\\d{4}$"; }
    public static get EMAIL() :string { return "^[a-zA-Z0-9_+&*-]+(?:\\." + "[a-zA-Z0-9_+&*-]+)*@" + "(?:[a-zA-Z0-9-]+\\.)" + "+[a-z" + "A-Z]{2,7}$"; }
}