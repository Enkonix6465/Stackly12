import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Fade-in & slide-up animation style
const fadeInUp = {
  animation: "fadeInUp 0.8s ease forwards",
  opacity: 0,
  transform: "translateY(20px)",
};

const styles = {
  keyframes: `
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    tr:hover {
      background-color: #001f4d !important;
      color: white !important;
      transition: background-color 0.3s, color 0.3s;
      cursor: pointer;
    }
    .card-hover:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 20px rgba(0,31,77,0.6);
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: pointer;
    }
    .activity-item:hover {
      background-color: #e6f0ff;
      transition: background-color 0.3s;
      cursor: default;
    }
  `,
};

const AdminDashboard = () => {
  const [allUserData, setAllUserData] = useState([]);
  const [loginStats, setLoginStats] = useState({ labels: [], data: [] });
  const [signupStats, setSignupStats] = useState({ labels: [], data: [] });
  const [userStatus, setUserStatus] = useState({ activeUsers: 0, inactiveUsers: 0 });
  const [recentLogins, setRecentLogins] = useState([]);
  const [signupGrowth, setSignupGrowth] = useState({ percent: 0, isGrowth: true });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const logins = JSON.parse(localStorage.getItem("userLogins")) || {};

    const usersWithLogin = users.map((u) => ({
      name: `${u.firstName} ${u.lastName}`,
      email: u.email,
      loginTime: logins[u.email] || "N/A",
      signupDate: u.signupDate || "N/A",
    }));
    setAllUserData(usersWithLogin);

    // Login stats + recent logins
    const counts = {};
    const timestamps = [];
    Object.entries(logins).forEach(([email, ts]) => {
      if (ts && ts !== "N/A") {
        const dt = new Date(ts).toLocaleDateString();
        counts[dt] = (counts[dt] || 0) + 1;
        timestamps.push({ email, dateTime: ts });
      }
    });
    const sortedDates = Object.keys(counts).sort((a, b) => new Date(a) - new Date(b));
    setLoginStats({ labels: sortedDates, data: sortedDates.map((d) => counts[d]) });

    const latest = timestamps.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime)).slice(0, 5);
    setRecentLogins(latest);

    // Signup stats
    const sCounts = {};
    users.forEach((u) => {
      if (u.signupDate) {
        const ds = new Date(u.signupDate).toLocaleDateString();
        sCounts[ds] = (sCounts[ds] || 0) + 1;
      }
    });
    const sDates = Object.keys(sCounts).sort((a, b) => new Date(a) - new Date(b));
    const sData = sDates.map((d) => sCounts[d]);
    setSignupStats({ labels: sDates, data: sData });

    // Signup growth calc
    const totalRecentWeek = sData.slice(-7).reduce((a, b) => a + b, 0);
    const totalPrevWeek = sData.slice(-14, -7).reduce((a, b) => a + b, 0);
    const growth = totalPrevWeek ? ((totalRecentWeek - totalPrevWeek) / totalPrevWeek) * 100 : totalRecentWeek > 0 ? 100 : 0;
    setSignupGrowth({ percent: Math.abs(growth.toFixed(1)), isGrowth: growth >= 0 });

    // Active / inactive
    const now = Date.now();
    const activeTh = 30 * 24 * 60 * 60 * 1000;
    let act = 0, inact = 0;
    usersWithLogin.forEach((u) => {
      if (u.loginTime !== "N/A") {
        const diff = now - new Date(u.loginTime).getTime();
        diff <= activeTh ? act++ : inact++;
      } else inact++;
    });
    setUserStatus({ activeUsers: act, inactiveUsers: inact });
  }, []);

  if (!allUserData.length) {
    return <p style={{ color: "#001f4d", fontSize: 18, textAlign: "center", marginTop: 40 }}>No users found.</p>;
  }

  const loginData = {
    labels: loginStats.labels,
    datasets: [{ label: "Logins", data: loginStats.data, backgroundColor: "rgba(0,31,77,0.8)", borderRadius: 4 }],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#000" }, position: "top" },
      title: { display: true, font: { size: 22, weight: "bold" }, color: "#000" },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: { ticks: { color: "#001f4d", maxRotation: 90, minRotation: 45 }, grid: { color: "#e0e0e0" } },
      y: { ticks: { color: "#001f4d" }, grid: { color: "#e0e0e0" }, beginAtZero: true },
    },
  };
  const signupData = {
    labels: signupStats.labels,
    datasets: [{ label: "Signups", data: signupStats.data, fill: false, borderColor: "rgba(0,31,77,0.9)", backgroundColor: "rgba(0,31,77,0.5)", tension: 0.3, pointRadius: 6 }],
  };

  return (
    <>
      <style>{styles.keyframes}</style>
      <div style={{ maxWidth: 1000, margin: "40px auto", padding: "20px", fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f5f8fc", color: "#001f4d", borderRadius: 10, boxShadow: "0 6px 20px rgba(0,31,77,0.15)" }}>
        
        {/* User Data Table */}
        <section style={{ ...fadeInUp, marginBottom: 60, padding: 20, backgroundColor: "#fff", borderRadius: 12, boxShadow: "0 4px 15px rgba(0,31,77,0.1)" }}>
          <h2 style={{ marginBottom: 20, color: "#001f4d", fontWeight: 700 }}>User Data Table</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600, fontSize: 16, color: "#001f4d" }}>
              <thead>
                <tr style={{ backgroundColor: "#001f4d", color: "#fff", userSelect: "none" }}>
                  <th style={{ padding: "14px", borderBottom: "3px solid #004080", textAlign: "left" }}>Name</th>
                  <th style={{ padding: "14px", borderBottom: "3px solid #004080", textAlign: "left" }}>Email</th>
                  <th style={{ padding: "14px", borderBottom: "3px solid #004080", textAlign: "left" }}>Login Date/Time</th>
                </tr>
              </thead>
              <tbody>
                {allUserData.map((u, idx) => (
                  <tr key={idx} className="table-row-hover" style={{ borderBottom: "1px solid #cbd5e1", backgroundColor: idx % 2 === 0 ? "#fff" : "#e6f0ff", transition: "background-color 0.3s, color 0.3s" }}>
                    <td style={{ padding: "12px" }}>{u.name}</td>
                    <td style={{ padding: "12px" }}>{u.email}</td>
                    <td style={{ padding: "12px" }}>{u.loginTime !== "N/A" ? new Date(u.loginTime).toLocaleString() : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Login Chart */}
        <section style={{ ...fadeInUp, marginBottom: 60, padding: 20, backgroundColor: "#fff", borderRadius: 12, boxShadow: "0 4px 15px rgba(0,31,77,0.1)" }}>
          <h2 style={{ marginBottom: 20, color: "#001f4d", fontWeight: 700 }}>Login Activity Graph</h2>
          <Bar data={loginData} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: "User Logins Per Day" } } }} />
        </section>

        {/* Signup Chart */}
        <section style={{ ...fadeInUp, marginBottom: 60, padding: 20, backgroundColor: "#e6f0ff", borderRadius: 12, boxShadow: "0 4px 15px rgba(0,31,77,0.1)" }}>
          <h2 style={{ marginBottom: 20, color: "#001f4d", fontWeight: 700 }}>User Signup Trends</h2>
          <Line data={signupData} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: "User Signup Trends" } } }} />
        </section>

        {/* Active / Inactive Users */}
        <section style={{ ...fadeInUp,marginBottom:40, display: "flex", justifyContent: "space-around", padding: 20, backgroundColor: "#fff", borderRadius: 12, boxShadow: "0 4px 20px rgba(0,31,77,0.12)", gap: 20 }}>
          <div className="card-hover" style={{ flex: 1, padding: 24, backgroundColor: "#001f4d", color: "#fff", borderRadius: 12, textAlign: "center", boxShadow: "0 6px 18px rgba(0,31,77,0.4)" }}>
            <h3 style={{ marginBottom: 12, fontWeight: 700 }}>Active Users</h3>
            <p style={{ margin: 0, fontSize: 36 }}>{userStatus.activeUsers}</p>
            <small style={{ fontWeight: 500 }}>Logged in last 30 days</small>
          </div>
          <div className="card-hover" style={{ flex: 1, padding: 24, backgroundColor: "#000", color: "#00aaff", borderRadius: 12, textAlign: "center", boxShadow: "0 6px 18px rgba(0,170,255,0.5)" }}>
            <h3 style={{ marginBottom: 12, fontWeight: 700 }}>Inactive Users</h3>
            <p style={{ margin: 0, fontSize: 36 }}>{userStatus.inactiveUsers}</p>
            <small style={{ fontWeight: 500 }}>Not logged in in 30 days</small>
          </div>
        </section>

        {/* New Section – Recent Login Activity */}
        <section style={{ ...fadeInUp, marginBottom: 60, padding: 40, backgroundColor: "#fff", borderRadius: 12, boxShadow: "0 4px 15px rgba(0,31,77,0.1)" }}>
          <h2 style={{  marginBottom: 12, fontWeight: 700, color: "#001f4d", fontWeight: 700 }}>Recent Login Activity</h2>
          <div style={{ maxHeight: 200, overflowY: "auto" }}>
            {recentLogins.map((entry, idx) => (
              <div key={idx} className="activity-item" style={{ padding: 12, borderBottom: "1px solid #e0e0e0", display: "flex", justifyContent: "space-between" }}>
                <span>{entry.email}</span>
                <span>{new Date(entry.dateTime).toLocaleString()}</span>
              </div>
            ))}
          </div>
        </section>

        {/* New Section – Signup Growth Comparison */}
        <section className="card-hover" style={{ ...fadeInUp, padding: 24, borderRadius: 12, backgroundColor: signupGrowth.isGrowth ? "#fafafaff" : "#fff5f5", color: signupGrowth.isGrowth ? "#001f4d" : "#001f4d", textAlign: "center", marginBottom: 60, boxShadow: `0 4px 12px rgba(${signupGrowth.isGrowth ? "0,102,68" : "153,0,0"}, 0.4)` }}>
          <h3 style={{ marginBottom: 12, fontWeight: 700 }}>Signup Growth This Week</h3>
          <p style={{ margin: 0, fontSize: 36 }}>{signupGrowth.isGrowth ? "▲" : "▼"} {signupGrowth.percent}%</p>
          <small style={{ fontWeight: 500 }}>compared to previous week</small>
        </section>

      </div>
    </>
  );
};

export default AdminDashboard;
