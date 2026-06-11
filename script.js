// Palitan mo ang listahan na ito ng mga totoong ID at Pangalan ng members mo.
const guildMembers = [
    { id: "1774125266", name: "ES ❈ ꜰʀɪᴍᴇᴾᴴ", role: "Guild Leader" },
    { id: "87654321", name: "COMMANDER_NIKO", role: "Co-Leader" },
    { id: "11223344", name: "Slayer_FF", role: "Elite Member" },
    { id: "55667788", name: "Chrono_Gamer", role: "Member" }
];

function verifyMember() {
    const inputId = document.getElementById("memberIdInput").value.trim();
    const loadingEffect = document.getElementById("loadingEffect");
    const resultBox = document.getElementById("resultBox");
    const verifyBtn = document.getElementById("verifyBtn");

    // Validasyon kung walang nilagay na ID
    if (inputId === "") {
        alert("Please enter a valid Free Fire ID.");
        return;
    }

    // I-disable muna ang button at itago ang lumang resulta
    verifyBtn.disabled = true;
    resultBox.classList.add("hidden");
    
    // Ipakita ang Loading Effect
    loadingEffect.classList.remove("hidden");

    // Cinematic Delay (2 Seconds bago lumabas ang result para astig)
    setTimeout(() => {
        // Hanapin kung may match sa array database natin
        const member = guildMembers.find(m => m.id === inputId);

        // Itago na ang loading
        loadingEffect.classList.add("hidden");
        verifyBtn.disabled = false;

        if (member) {
            // SUCCESS RESULT: Official Member
            resultBox.className = "result-card verified";
            resultBox.innerHTML = `
                <div class="status-icon">🛡️</div>
                <div class="result-title">VERIFIED MEMBER</div>
                <div class="result-details">
                    <p><strong>IGN:</strong> ${member.name}</p>
                    <p><strong>UID:</strong> ${member.id}</p>
                    <p><strong>Position:</strong> ${member.role}</p>
                    <p style="margin-top: 10px; color: #2ed573; font-weight: bold;">✓ Certified ECHO SPORTS Player</p>
                </div>
            `;
        } else {
            // FAILED RESULT: Hindi Member
            resultBox.className = "result-card not-found";
            resultBox.innerHTML = `
                <div class="status-icon">❌</div>
                <div class="result-title">ACCESS DENIED</div>
                <div class="result-details">
                    <p>UID <strong>${inputId}</strong> is not registered in our official roster.</p>
                    <p style="margin-top: 10px; color: #ff4757;">If you are a member, please contact the Guild Leader to update the system.</p>
                </div>
            `;
        }

        // Ipakita ang Result Box
        resultBox.classList.remove("hidden");

    }, 2000); // 2000 milliseconds = 2 seconds loading
}
