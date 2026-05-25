import time
import subprocess

print("AI Monitor Started...")

while True:
    result = subprocess.run(
        ["kubectl", "get", "pods"],
        capture_output=True,
        text=True
    )

    output = result.stdout

    if "CrashLoopBackOff" in output:
        print("AI ALERT: Pod crashing detected!")

    else:
        print("System healthy")

    time.sleep(10)