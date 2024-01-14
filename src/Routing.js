// Remaining Task:
// - Create validations for input
//-See if can use MediaQuery

import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoL from "./assets/LogoL";
import LogoM from "./assets/LogoM";
import Home from "./Home";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const HandleLogin = () => {
    let users = JSON.parse(localStorage.getItem("users"));
    let foundUser = users.find((user) => user.username === username);
    if (!foundUser || foundUser.password !== password) {
      alert("Invalid username/password!");
    } else {
      navigate("/" + foundUser.username);
    }
  };

  useEffect(() => {
    setIsFormValid(username.trim() !== "" && password.trim() !== "");
  }, [username, password]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#59BEFF"
      }}
    >
      <div
        style={{
          paddingTop: 50,
          paddingBottom: 0,
          backgroundColor: "#59BEFF",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <LogoL
          style={{
            backgroundColor: "white",
            width: "90%",
            border: "darkblue 3px solid",
            borderRadius: 30
          }}
        />
      </div>

      <p
        style={{
          fontFamily: "fantasy",
          fontSize: "1.25em",
          textAlign: "center"
        }}
      >
        Join 100,000+ users worldwide!
      </p>

      <div
        style={{
          borderColor: "white",
          width: "60%",
          border: "5px solid",
          borderRadius: 10,
          backgroundColor: "#1D7D94",
          color: "white",
          padding: 60,
          textAlign: "center"
        }}
      >
        <h1>Login</h1>
        {/* Username Label and Input */}
        <div style={{ paddingBottom: 15 }}>
          <div>
            <label htmlFor="username">Username:</label>
          </div>
          <input
            style={{ fontSize: "1.25em", width: "100%" }}
            placeholder="Enter your username"
            required
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        {/* Password Label and Input */}
        <div style={{ paddingBottom: 15 }}>
          <div>
            <label htmlFor="password">Password:</label>
          </div>
          <input
            style={{ fontSize: "1.25em", width: "100%" }}
            placeholder="Enter your password"
            required
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        {/* Login Button */}
        <button
          onClick={HandleLogin}
          disabled={!isFormValid}
          style={{
            border: "3px solid lightblue",
            borderRadius: 5,
            paddingRight: 10,
            paddingLeft: 10,
            marginTop: 10,
            fontWeight: 900,
            fontSize: "1em"
          }}
        >
          Login
        </button>

        {/* Fine Print Terms */}
        <div style={{ fontSize: "0.75em", textAlign: "center" }}>
          <p>
            People who use our service may have uploaded your contact
            information to Epic.
          </p>
          <Link to="#">Learn More</Link>
          <p>
            By signing up, you agree to our <Link to="#">Terms</Link>,
            <Link to="#"> Privacy Policy </Link> and{" "}
            <Link to="#"> Cookies Policy </Link>. You may receive SMS
            Notifications from us and can opt out any time.
          </p>
        </div>
      </div>
      <div style={{ paddingBottom: 100, textAlign: "center" }}>
        <p>
          Don't have an account? <Link to="/register">Register</Link>{" "}
        </p>
      </div>
    </div>
  );
};

const Register = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          paddingTop: 50,
          paddingBottom: 0,
          backgroundColor: "#59BEFF"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <LogoL
            style={{
              backgroundColor: "white",
              width: "90%",
              border: "darkblue 3px solid",
              borderRadius: 30
            }}
          />
        </div>
      </div>

      <p style={{ fontFamily: "fantasy", fontSize: "1.25em" }}>
        {" "}
        Join 100,000+ users worldwide !
      </p>
      <RegistrationForm />

      <div style={{ paddingBottom: 100 }}>
        {" "}
        <p>
          {" "}
          Already have an account? <Link to="/login"> Log in </Link>{" "}
        </p>
      </div>
    </div>
  );
};

const SuccessfulSubmission = () => {
  return (
    <div>
      <h1> Your Registration was Successful!</h1>
      <h2> Thank you! </h2>
    </div>
  );
};

const Routing = () => {
  return (
    <div style={{ backgroundColor: "#59BEFF" }}>
      <div
        style={{
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div>
          <LogoM />
        </div>
        <span style={{ paddingRight: "10px" }} />
        <div>
          <button style={{ borderRadius: 10, padding: "5px 12px" }}>
            <Link
              style={{
                textDecoration: "none",
                fontWeight: 900,
                color: "black"
              }}
              to="/login"
            >
              Login{" "}
            </Link>
          </button>
          <span style={{ paddingRight: "10px" }} />
          <button style={{ borderRadius: 10, padding: "5px 12px" }}>
            <Link
              style={{
                textDecoration: "none",
                fontWeight: 900,
                color: "black"
              }}
              to="/register"
            >
              {" "}
              Register{" "}
            </Link>
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/:username" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/successfulSubmission"
          element={<SuccessfulSubmission />}
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
};

//Register Form for Register Page
function RegistrationForm() {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [pword, setPassword] = useState("");

  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 25
      }}
    >
      <div
        style={{
          borderColor: "white",
          width: "60%",
          border: "5px solid",
          borderRadius: 10,
          backgroundColor: "#1D7D94",
          color: "white",
          padding: 60,
          textAlign: "left"
        }}
      >
        <h1 style={{ textAlign: "center", marginTop: 10 }}>Register</h1>
        {/* Username Label and Input */}
        <div style={{ paddingBottom: 20 }}>
          <div>
            <label for="username"> Username: </label>
          </div>
          <input
            style={{ fontSize: "1.25em", width: "100%" }}
            placeholder="New username"
            required
            id="username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>

        {/* Age Label and Input */}
        <div style={{ paddingBottom: 20 }}>
          <div>
            <label for="age"> Age: </label>
          </div>
          <input
            style={{ fontSize: "1.25em", width: "100%" }}
            placeholder="Current age"
            required
            type="number"
            id="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>

        {/* Email Label and Input */}
        <div style={{ paddingBottom: 15 }}>
          <div>
            <label for="email">Email: </label>
          </div>
          <input
            style={{ fontSize: "1.25em", width: "100%" }}
            placeholder="Email address"
            required
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        {/* Password Label and Input */}
        <div style={{ paddingBottom: 15 }}>
          <div>
            <label for="pword">Password: </label>
          </div>
          <input
            style={{ fontSize: "1.25em", width: "100%" }}
            placeholder="New password"
            required
            type="password"
            minLength="4"
            id="pword"
            value={pword}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        {/* SignUp Button */}
        <input
          type="button"
          onClick={() => {
            let users = JSON.parse(localStorage.getItem("users"));
            if (!users) {
              users = [
                { username: userName, age: age, email: email, password: pword }
              ];
              localStorage.setItem("users", JSON.stringify(users));
            } else {
              users = [
                ...users,
                { username: userName, age: age, email: email, password: pword }
              ];
              localStorage.setItem("users", JSON.stringify(users));
            }
            navigate("/successfulSubmission");
          }}
          value="Sign Up"
          style={{
            border: "3px solid lightblue",
            borderRadius: 5,
            paddingRight: 10,
            paddingLeft: 10,
            marginTop: 10,
            fontWeight: 900,
            fontSize: "1em"
          }}
        />

        {/* Fine Print Terms */}
        <div style={{ fontSize: "0.75em", textAlign: "center" }}>
          <p>
            People who use our service may have uploaded your contact
            information to Epic.
          </p>
          <Link to="#">Learn More</Link>
          <p>
            {" "}
            By signing up, you agree to our <Link to="#">Terms</Link>,
            <Link to="#"> Privacy Policy </Link> and{" "}
            <Link to="#"> Cookies Policy </Link>. You may receive SMS
            Notifications from us and can opt out any time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Routing;
