document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  // --- ELEMENTOS E REFERÊNCIAS ---
  const screens = {
    login: document.getElementById("screen-login"),
    register: document.getElementById("screen-register"),
    app: document.getElementById("app-layout"),
  };

  const views = {
    dashboard: document.getElementById("view-dashboard"),
    doctorDashboard: document.getElementById("view-doctor-dashboard"),
    search: document.getElementById("view-search"),
    datetime: document.getElementById("view-datetime"),
    success: document.getElementById("view-success"),
  };

  const menus = {
    patient: document.getElementById("menu-patient"),
    doctor: document.getElementById("menu-doctor"),
  };

  const btnHeaderAgendar = document.getElementById("btn-header-agendar");
  
  // Referências aos botões mobile
  const btnMobileAgendar = document.getElementById("btn-mobile-agendar");
  const btnMobileDoctorAgenda = document.getElementById("btn-mobile-doctor-agenda");

  const headerInfo = {
    title: document.getElementById("header-title"),
    name: document.querySelector(".header-user-name"),
    role: document.querySelector(".header-user-role"),
    avatar: document.querySelector(".header-user-avatar"),
  };

  let appointmentData = {
    doctorName: "",
    time: "",
    date: "23 Set, 2025",
  };

  let currentUserRole = "patient";

  // --- FUNÇÕES DE INTERFACE ---

  function setupInterface(role) {
    currentUserRole = role;

    // 1. Alternar Menu Lateral (Desktop)
    if (menus.patient && menus.doctor) {
      if (role === "doctor") {
        menus.patient.classList.add("hidden");
        menus.doctor.classList.remove("hidden");
      } else {
        menus.doctor.classList.add("hidden");
        menus.patient.classList.remove("hidden");
      }
    }

    // 2. Controlar Botões (Header e Mobile)
    if (role === "doctor") {
      // Médico: Esconde botão de agendar paciente
      if (btnHeaderAgendar) {
        btnHeaderAgendar.classList.add("hidden");
        btnHeaderAgendar.classList.remove("md:flex");
      }
      if (btnMobileAgendar) btnMobileAgendar.classList.add("hidden");
      
      // Médico: Mostra botão de Agenda do Médico
      if (btnMobileDoctorAgenda) btnMobileDoctorAgenda.classList.remove("hidden");

    } else {
      // Paciente: Mostra botões de agendar
      if (btnHeaderAgendar) {
        btnHeaderAgendar.classList.add("hidden");
        btnHeaderAgendar.classList.add("md:flex");
      }
      if (btnMobileAgendar) btnMobileAgendar.classList.remove("hidden");

      // Paciente: Esconde botão de Agenda do Médico
      if (btnMobileDoctorAgenda) btnMobileDoctorAgenda.classList.add("hidden");
    }

    // 3. Personalizar Header
    if (role === "doctor") {
      if (headerInfo.title) headerInfo.title.innerText = "Olá, Dr. Marco";
      if (headerInfo.name) headerInfo.name.innerText = "Dr. Marco";
      if (headerInfo.role) headerInfo.role.innerText = "Ortopedista";
      if (headerInfo.avatar)
        headerInfo.avatar.src =
          "https://api.dicebear.com/7.x/avataaars/svg?seed=Marco";
    } else {
      if (headerInfo.title) headerInfo.title.innerText = "Olá, João";
      if (headerInfo.name) headerInfo.name.innerText = "João Silva";
      if (headerInfo.role) headerInfo.role.innerText = "Paciente";
      if (headerInfo.avatar)
        headerInfo.avatar.src =
          "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix";
    }
  }

  // --- NAVEGAÇÃO ---

  function switchScreen(screenName) {
    Object.values(screens).forEach((el) => {
      if (el) {
        el.classList.add("hidden");
        el.classList.remove("active");
      }
    });
    const target = screens[screenName];
    if (target) {
      target.classList.remove("hidden");
      target.classList.add("active");
    }
  }

  window.navigateInternal = function (viewName) {
    Object.values(views).forEach((el) => {
      if (el) el.classList.add("hidden");
    });

    const target = views[viewName];
    if (target) {
      target.classList.remove("hidden");
      target.classList.remove("fade-in");
      void target.offsetWidth;
      target.classList.add("fade-in");
    }

    const title = document.getElementById("header-title");
    if (title) {
      if (viewName === "search") title.innerText = "Nova Consulta";
      else if (viewName === "datetime") title.innerText = "Agendamento";
      else if (viewName === "doctorDashboard") title.innerText = "Painel Médico";
      else {
        title.innerText =
          currentUserRole === "doctor" ? "Olá, Dr. Marco" : "Olá, João";
      }
    }

    lucide.createIcons();
  };

  // --- EVENTOS ---

  document.getElementById("link-to-register").onclick = () =>
    switchScreen("register");
  document.getElementById("link-to-login").onclick = () =>
    switchScreen("login");

  document.getElementById("login-form").onsubmit = (e) => {
    e.preventDefault();
    const selectedRoleInput = document.querySelector(
      'input[name="login-role"]:checked'
    );
    const selectedRole = selectedRoleInput ? selectedRoleInput.value : "patient";

    switchScreen("app");
    setupInterface(selectedRole);

    if (selectedRole === "doctor") {
      navigateInternal("doctorDashboard");
    } else {
      navigateInternal("dashboard");
    }
  };

  document.getElementById("register-form").onsubmit = (e) => {
    e.preventDefault();
    alert("Cadastro com sucesso!");
    switchScreen("login");
  };

  document.querySelectorAll(".btn-go-search").forEach((btn) => {
    btn.onclick = () => navigateInternal("search");
  });

  document.querySelectorAll(".btn-back-dash").forEach((btn) => {
    btn.onclick = () => {
      const targetDash =
        currentUserRole === "doctor" ? "doctorDashboard" : "dashboard";
      navigateInternal(targetDash);
    };
  });

  document.querySelectorAll(".btn-back-search").forEach((btn) => {
    btn.onclick = () => navigateInternal("search");
  });

  const btnInicio = document.getElementById("nav-dashboard");
  if (btnInicio) btnInicio.onclick = () => navigateInternal("dashboard");

  const btnInicioMedico = document.getElementById("nav-doctor-dashboard");
  if (btnInicioMedico)
    btnInicioMedico.onclick = () => navigateInternal("doctorDashboard");

  const logoutAction = () => {
    if (confirm("Sair do sistema?")) {
      document.querySelectorAll("input").forEach((i) => {
        if (i.type !== "radio") i.value = "";
      });
      currentUserRole = "patient";
      switchScreen("login");
    }
  };

  if (document.getElementById("btn-logout-header"))
    document.getElementById("btn-logout-header").onclick = logoutAction;
  if (document.getElementById("btn-logout-mobile"))
    document.getElementById("btn-logout-mobile").onclick = logoutAction;

  // --- AGENDAMENTO ---
  const timeSlots = document.querySelectorAll(".time-slot");
  const confirmBtn = document.getElementById("btn-confirm-booking");

  function resetAgendamento() {
    timeSlots.forEach((s) => {
      s.classList.remove("bg-blue-600", "text-white", "border-blue-600");
      s.classList.add("bg-white", "text-slate-600", "border-slate-200");
    });
    if (confirmBtn) {
      confirmBtn.disabled = true;
      confirmBtn.innerText = "Confirmar Agendamento";
      confirmBtn.classList.remove("bg-blue-700", "shadow-lg");
    }
  }

  document.querySelectorAll(".btn-select-doc").forEach((btn) => {
    btn.onclick = (e) => {
      const card = e.target.closest(".doctor-card");
      const container = e.target.closest(".bg-white");
      const doctorName = container.querySelector("h4").innerText;

      appointmentData.doctorName = doctorName;

      resetAgendamento();
      navigateInternal("datetime");
    };
  });

  timeSlots.forEach((slot) => {
    slot.onclick = function () {
      timeSlots.forEach((s) => {
        s.classList.remove("bg-blue-600", "text-white", "border-blue-600");
        s.classList.add("bg-white", "text-slate-600", "border-slate-200");
      });

      this.classList.remove("bg-white", "text-slate-600", "border-slate-200");
      this.classList.add("bg-blue-600", "text-white", "border-blue-600");

      appointmentData.time = this.innerText;

      if (confirmBtn) {
        confirmBtn.disabled = false;
        confirmBtn.classList.remove("cursor-not-allowed", "opacity-50");
        confirmBtn.classList.add("hover:bg-blue-700", "shadow-lg");
      }
    };
  });

  if (confirmBtn) {
    confirmBtn.onclick = () => {
      confirmBtn.innerText = "Processando...";
      confirmBtn.disabled = true;

      setTimeout(() => {
        document.getElementById("success-doctor").innerText =
          appointmentData.doctorName;
        document.getElementById("success-time").innerText =
          appointmentData.time;
        document.getElementById("success-date").innerText =
          appointmentData.date;

        navigateInternal("success");
      }, 1000);
    };
  }

  const btnSuccessBack = document.getElementById("btn-back-home-success");
  if (btnSuccessBack) {
    btnSuccessBack.onclick = () => {
      navigateInternal("dashboard");
    };
  }

  window.avisoEmDesenvolvimento = function (funcionalidade) {
    alert(`⚠️ EM DESENVOLVIMENTO\n\nFuncionalidade: ${funcionalidade}`);
  };

  // --- BUSCA EM TEMPO REAL ---
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const doctorCards = document.querySelectorAll(".doctor-card");

      doctorCards.forEach((card) => {
        const cardText = card.innerText.toLowerCase();
        if (cardText.includes(searchTerm)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  }
});