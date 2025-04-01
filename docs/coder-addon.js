console.log("Injecting coder-addon.js");


function createAndInsertIframe() {
    console.log("Creating and inserting iframe");
    setTimeout(() => {
        const div = document.querySelector("div.css-q6nclv");

        if (!div) {
            console.error("Target div not found");
            return;
        }

        // if iframe already exists, remove it
        let iframe = div.querySelector("iframe");
        if (iframe) {
            iframe.remove();
        }

        iframe = document.createElement("iframe");
        iframe.src = "https://grafana.lab.tiankaima.cn:8443/d-solo/Oxed_c6Wx/main-dashboard-merged?orgId=1&timezone=browser&var-datasource=cefiwgcmlfdogd&panelId=29&__feature.dashboardSceneSolo&refresh=auto&from=now-1h&to=now";
        iframe.width = "100%";
        iframe.height = "250";
        iframe.frameBorder = "0";

        div.insertBefore(iframe, div.firstChild);
    }, 2000);
}

window.addEventListener("popstate", createAndInsertIframe);
window.addEventListener("hashchange", createAndInsertIframe);
window.addEventListener("DOMContentLoaded", createAndInsertIframe);


createAndInsertIframe();