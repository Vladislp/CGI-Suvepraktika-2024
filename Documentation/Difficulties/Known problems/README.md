## Known Problems

This section outlines the known problems or issues in the current version of the project. Please refer to this list for information on ongoing challenges and areas that need attention.

### Problem 1: [Two windows when choosing the seat]

- **Symptoms:**
  - When customer is desided with desired film, he/she should see only information about the movie they choose and seating plan. In the end you can see both, movie list and seat planner.

- **Impact:**
  - The problem is, that at first you don't know if you chose or what is going on. Customer experience is declining and you need to move mouse up to see it.

- **Steps to Reproduce:**
  - Run front-end and back-end
  - Press "Vaata lähemalt" on any movie option
  - Press "Vaata kohad"
  - You will see still movie selection, but move with roller higher on the page, where you will see similar to this.
  
- **Potential Solutions:**
  - One workaround is you have to refresh the page and you will see only seat planner with movie information. Possible problem, is that i could not send data dynamicaly about the movie. I saved everything inside **localstorage** which makes it worse, but it's a working solution.
  -

### Problem 2: [Description]

- **Symptoms:**
  - [Describe any symptoms or issues related to this problem.]

- **Impact:**
  - [Explain the impact this problem has on the project or users.]

- **Steps to Reproduce:**
  - [Provide steps or conditions that trigger the problem.]

- **Potential Solutions:**
  - [If any, mention potential solutions or workarounds.]

### Problem 3: [Description]

- **Symptoms:**
  - [Describe any symptoms or issues related to this problem.]

- **Impact:**
  - [Explain the impact this problem has on the project or users.]

- **Steps to Reproduce:**
  - [Provide steps or conditions that trigger the problem.]

- **Potential Solutions:**
  - [If any, mention potential solutions or workarounds.]

## Reporting New Issues

If you encounter any problems not listed above or have additional information to provide on existing issues, please open a new [issue](link-to-issue-tracker) on our issue tracker. Your feedback is valuable, and it helps us improve the project.

## Contributing Solutions

If you have identified a solution to any of the known problems or want to contribute fixes, please follow our [contribution guidelines](link-to-contributing-guide).

## License

This project is licensed under the [MIT License](LICENSE).
