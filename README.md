<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>ecommerce-store
</h1>
<h3>◦ Shop smart. Code smarter.</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style&logo=PostCSS&logoColor=white" alt="PostCSS" />
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style&logo=Autoprefixer&logoColor=white" alt="Autoprefixer" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />

<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style&logo=Axios&logoColor=white" alt="Axios" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/languages/top/TheoEwzZer/ecommerce-store?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/TheoEwzZer/ecommerce-store?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/TheoEwzZer/ecommerce-store?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/TheoEwzZer/ecommerce-store?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📖 Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [⚙️ Modules](#⚙️-modules)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Installation](#-installation)
  - [🤖 Running ecommerce-store](#-running-ecommerce-store)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 📍 Overview

The project is an ecommerce store built using Next.js and React. It allows users to browse and purchase products based on categories and sizes. The store fetches data from API endpoints to display products, billboards, and categories. It also includes functionality for adding items to the shopping cart. Overall, the project provides a user-friendly interface for online shopping and offers a seamless experience for browsing and purchasing products.

---

## 📦 Features

|     | Feature                       | Description                                                                                                                                                                                            |
| --- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 🌐  | **Multiple Store Management** | Easily handle multiple stores through a single CMS. Whether it's a "Shoe Store," "Laptop Store," or "Suit Store," our platform generates dedicated API routes for each store, streamlining management. |
| 🖼️  | **Product Management**        | Showcase your products in the best light. Upload and display multiple images for each product, providing customers with a detailed view of what you offer.                                             |
| 🛒  | **Order Processing**          | Seamlessly create and process orders through our intuitive interface, making it convenient for both you and your customers.                                                                            |
| 💳  | **Stripe Checkout**           | Enable secure and hassle-free transactions with our integrated Stripe checkout, offering a smooth payment experience for your customers.                                                               |
| 🔍  | **Advanced Product Search**   | Enhance user experience with a sophisticated search feature that allows customers to find products based on specific sizes and colors.                                                                 |
| 📱  | **Full Responsiveness**       | Ensure your online store looks and functions flawlessly on all devices, providing a seamless shopping experience for users on desktops, tablets, and mobile phones.                                    |
| 🔐  | **Clerk Authentication**      | Implement secure authentication using Clerk, safeguarding user accounts and ensuring data privacy.                                                                                                     |

<div align="center">
  <img src="public/images/Capture1.PNG" alt="Image 1" style="width: 49%;"/>
  <img src="public/images/Capture2.PNG" alt="Image 2" style="width: 49%;"/>
</div>

<div align="center">
  <img src="public/images/Capture3.PNG" alt="Image 3" style="width: 49%;"/>
  <img src="public/images/Capture4.PNG" alt="Image 4" style="width: 49%;"/>
</div>

---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [next.config.js](https://github.com/TheoEwzZer/ecommerce-store/blob/main/next.config.js)                                                       | The code sets up image remote patterns for Next.js, specifically for URLs starting with "https://res.cloudinary.com". The configuration allows Next.js to enable remote images from specific hosts.                                                                                                                                                                                                                                                                |
| [postcss.config.js](https://github.com/TheoEwzZer/ecommerce-store/blob/main/postcss.config.js)                                                 | This code exports a module that configures tailwindcss and autoprefixer as plugins. Tailwindcss provides utility classes for building responsive and customizable UI, while autoprefixer automatically adds browser-specific prefixes to CSS properties.                                                                                                                                                                                                           |
| [tailwind.config.ts](https://github.com/TheoEwzZer/ecommerce-store/blob/main/tailwind.config.ts)                                               | The code is configuring the Tailwind CSS framework by specifying the content files to be scanned, extending the theme with custom background image gradients, and defining any plugins to be used. It exports the final configuration as the default value.                                                                                                                                                                                                        |
| [types.ts](https://github.com/TheoEwzZer/ecommerce-store/blob/main/types.ts)                                                                   | The code defines interfaces for products, images, billboards, categories, sizes, and colors. These interfaces include properties like ids, names, labels, urls, and values. Together, they allow for the representation and manipulation of various attributes and relationships associated with these entities in a concise and structured manner.                                                                                                                |
| [get-billboard.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/actions\get-billboard.tsx)                                         | This code defines a function that fetches billboard data using an ID as input. It sends an HTTP GET request to an API endpoint and returns the retrieved billboard data.                                                                                                                                                                                                                                                                                           |
| [get-categories.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/actions\get-categories.tsx)                                       | This code defines a function "getCategories" that uses axios to make an HTTP GET request to the specified URL. It expects to receive a response in the form of an array of Category objects and returns it as a promise.                                                                                                                                                                                                                                           |
| [get-category.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/actions\get-category.tsx)                                           | This code defines a function that retrieves a specific category from an API endpoint. It uses Axios to make the HTTP request and returns the retrieved category data.                                                                                                                                                                                                                                                                                              |
| [get-colors.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/actions\get-colors.tsx)                                               | Exception:                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [get-product.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/actions\get-product.tsx)                                             | The code is a module that fetches product data from an API using Axios. It exports a function that takes an ID as a parameter and returns a Promise that resolves to the product information retrieved from the API. The module uses the URL defined by the environment variable NEXT_PUBLIC_API_URL to determine the API endpoint. Overall, it provides a simple and concise way to retrieve product data from the server.                                        |
| [get-products.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/actions\get-products.tsx)                                           | This code exports a function'getProducts' that fetches a list of products from an API using specified filter parameters. It constructs the API URL with the query parameters and sends a GET request. The function returns the fetched product data as an array.                                                                                                                                                                                                   |
| [get-sizes.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/actions\get-sizes.tsx)                                                 | This code is a utility for retrieving a list of sizes from an API. It uses the Axios library to make a GET request to a specified URL and returns the data received in a Promise of type Size[]. The function can be imported and used in other parts of the codebase.                                                                                                                                                                                             |
| [globals.css](https://github.com/TheoEwzZer/ecommerce-store/blob/main/app\globals.css)                                                         | This code combines Tailwind CSS utilities to apply a base style, components, and utility classes to the HTML, body, and root elements. It ensures 100% height for these elements, providing a foundation for styling the website layout effectively.                                                                                                                                                                                                               |
| [layout.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/app\layout.tsx)                                                           | This code defines the layout structure for a frontend application using React. It includes a header, footer, and various providers for modals and toasts. It also sets a specific font and provides metadata for SEO purposes.                                                                                                                                                                                                                                     |
| [loading.tsx](<https://github.com/TheoEwzZer/ecommerce-store/blob/main/app(routes)\loading.tsx>)                                               | This code defines a Loading component which renders a loading UI. It uses the Container component to provide a layout structure and displays skeleton elements to simulate content that is being loaded. The grid layout and aspect ratio of the skeleton elements create a visually appealing loading state.                                                                                                                                                      |
| [page.tsx](<https://github.com/TheoEwzZer/ecommerce-store/blob/main/app(routes)\page.tsx>)                                                     | This code imports necessary modules, fetches a billboard and featured products, and renders them on the homepage using React components. The billboard and featured products are fetched asynchronously using API calls.                                                                                                                                                                                                                                           |
| [page.tsx](<https://github.com/TheoEwzZer/ecommerce-store/blob/main/app(routes)\cart\page.tsx>)                                                | This code defines a CartPage component that displays a shopping cart. It uses the useCart hook to manage the cart state and renders a list of cart items using the CartItem component. The Summary component displays a summary of the cart. The isMounted variable is used to prevent rendering until the component is mounted.                                                                                                                                   |
| [cart-item.tsx](<https://github.com/TheoEwzZer/ecommerce-store/blob/main/app(routes)\cart\components\cart-item.tsx>)                           | The code defines a CartItem component that displays an item in a shopping cart. It renders the product image, name, color, size, and price. It also includes a remove button that calls the onRemove function to remove the item from the cart.                                                                                                                                                                                                                    |
| [summary.tsx](<https://github.com/TheoEwzZer/ecommerce-store/blob/main/app(routes)\cart\components\summary.tsx>)                               | This code defines a React component called "Summary". It displays an order summary with a total price for items in a shopping cart. It also includes a button to initiate the checkout process. The functionality includes handling payment success and cancellation through URL search parameters and making a POST request to an API endpoint for checkout. The code uses various libraries and hooks for state management, API communication, and UI rendering. |
| [loading.tsx](<https://github.com/TheoEwzZer/ecommerce-store/blob/main/app(routes)\category[categoryId]\loading.tsx>)                          | The code represents a loading UI component that displays a container with various skeleton elements, giving the appearance of placeholders while the actual content is loading. It uses the Container, Skeleton, and React library to create the UI.                                                                                                                                                                                                               |
| [page.tsx](<https://github.com/TheoEwzZer/ecommerce-store/blob/main/app(routes)\category[categoryId]\page.tsx>)                                | This code is a React component for a category page. It fetches products, sizes, colors, and category details from API endpoints. It renders a billboard, filters, and product cards. It also handles empty results and includes responsive design elements.                                                                                                                                                                                                        |
| [filter.tsx](<https://github.com/TheoEwzZer/ecommerce-store/blob/main/app(routes)\category[categoryId]\components\filter.tsx>)                 | This code exports a React component called "Filter" that generates a UI for filtering a specific dataset based on size or color. It creates buttons for each filter option and handles the logic for updating the URL and re-rendering the component when a filter is selected or deselected.                                                                                                                                                                      |
| [mobile-filters.tsx](<https://github.com/TheoEwzZer/ecommerce-store/blob/main/app(routes)\category[categoryId]\components\mobile-filters.tsx>) | The MobileFilters component is a responsive filter component for a web application. It displays a button and opens a dialog with filter options when clicked. The dialog contains two Filter components that show selectable options for sizes and colors. The component uses state to control the dialog's open/close state.                                                                                                                                      |
| [loading.tsx](<https://github.com/TheoEwzZer/ecommerce-store/blob/main/app(routes)\product[productId]\loading.tsx>)                            | The code defines a React component called Loading that renders a loading screen with placeholder content. It uses the Container component to provide a layout, and the Skeleton component to display animated placeholders for various elements on the screen. The loading screen includes a grid layout and multiple placeholders for a visually appealing loading experience.                                                                                    |
| [page.tsx](<https://github.com/TheoEwzZer/ecommerce-store/blob/main/app(routes)\product[productId]\page.tsx>)                                  | The code is a module that defines a React component for a product details page. It fetches the details of a specific product and a list of suggested related products. It then renders the product images, information, and a list of related items on the page. The component takes a product ID as a parameter and returns a React element.                                                                                                                      |
| [billboard.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\billboard.tsx)                                              | The code defines a Billboard component in React that displays an image background and a label. The image URL and label are passed as props. The component is styled with rounded corners and overflow properties. The label is rendered with different font sizes based on screen size.                                                                                                                                                                            |
| [footer.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\footer.tsx)                                                    | The code defines a React functional component called Footer that returns a footer element with a specific layout and content. It displays a copyright notice with the current year and company name. The component is exported to be used in other parts of the application.                                                                                                                                                                                       |
| [info.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\info.tsx)                                                        | The code is a React component that displays information about a product, including its name, price, size, color, and an "Add to Cart" button. It utilizes the "useCart" hook to manage the shopping cart functionality.                                                                                                                                                                                                                                            |
| [main-nav.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\main-nav.tsx)                                                | The code defines a MainNav component that renders a navigation menu based on a given list of categories. Each category is mapped to a Route object, which contains information about the category's URL, label, and whether it is currently active. The component then uses the routes to render Link components for each category in a navigation bar, applying different styles based on whether the route is active or not.                                     |
| [navbar-actions.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\navbar-actions.tsx)                                    | This code exports a function component called "NavbarActions", which represents the actions section of a navigation bar. It renders a button with a shopping bag icon and a counter showing the number of items in the cart. Clicking the button navigates to the cart page. It uses custom hooks and external libraries for functionality.                                                                                                                        |
| [navbar.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\navbar.tsx)                                                    | This code exports a React functional component called `Navbar`. It fetches a list of categories and renders a navigation bar with a logo, category links, and additional actions. The component utilizes Next.js for server-side rending and uses various custom components and styles for layout and functionality.                                                                                                                                               |
| [preview-modal.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\preview-modal.tsx)                                      | The code implements a PreviewModal component that displays a product's gallery and information in a modal. It utilizes the usePreviewModal hook to manage state and handles the open and close functionality of the modal using the Modal component from the UI library. The Gallery component displays the product's images, while the Info component renders the product's details.                                                                              |
| [product-list.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\product-list.tsx)                                        | The code defines a `ProductList` component that takes in a `title` prop and an array of `items`. It renders a title, a `NoResults` component if the `items` array is empty, and a grid of `ProductCard` components for each item in the array.                                                                                                                                                                                                                     |
| [gallery-tab.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\gallery\gallery-tab.tsx)                                  | This code defines a `GalleryTab` component that renders an image tab. It uses `next/image` to display the image, and `@headlessui/react` for the tab functionality. The image URL is passed as a prop, and the selected tab is styled differently.                                                                                                                                                                                                                 |
| [index.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\gallery\index.tsx)                                              | This code implements a gallery component that displays a set of images in a tabbed layout. It uses Next.js' Image component for optimized image rendering and Headless UI's Tab component for the tabbed navigation. The images are passed as props to the component and rendered using a combination of Grid and Flexbox layouts. Each image is displayed in a separate Tab Panel. The code is written in TypeScript.                                             |
| [button.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\ui\button.tsx)                                                 | The code is defining a Button component using React, which renders a button element. It accepts various props like className, children, disabled, and type. It applies CSS classes based on the props and renders the button accordingly. The component also supports forwarding refs.                                                                                                                                                                             |
| [container.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\ui\container.tsx)                                           | The code defines a functional component called `Container`. It takes a prop called `children` which represents the child elements. The component returns a `<div>` element with a CSS class for centering the content and setting a maximum width. This component is designed to provide a styled container for its child components.                                                                                                                              |
| [currency.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\ui\currency.tsx)                                             | This code exports a React component called "Currency" that takes a value prop and formats it as a currency in Euros. It uses the Intl.NumberFormat API to achieve this. The component also includes the functionality to delay rendering until it has mounted, preventing rendering errors.                                                                                                                                                                        |
| [icon-button.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\ui\icon-button.tsx)                                       | This code defines a reusable `IconButton` component in React. It takes an optional `onClick` function, an `icon` element, and a `className` string. The component renders a button with rounded corners and a background color. It also applies styling classes for borders, shadows, and hover effects. The `icon` element is placed inside the button.                                                                                                           |
| [modal.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\ui\modal.tsx)                                                   | The code defines a reusable Modal component that can be used to display a dialog box on a web page. It utilizes the Dialog and Transition components from the @headlessui/react library to handle the open/close transitions. The Modal component takes in the open state, an onClose callback function, and a content prop for the modal content. It renders a styled modal dialog with a close button and the specified content.                                 |
| [no-results.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\ui\no-results.tsx)                                         | This code creates a functional React component called NoResults. It returns a div with a class name and text content "No results found". It is intended to be used when there are no search results to display.                                                                                                                                                                                                                                                    |
| [product-card.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\ui\product-card.tsx)                                     | The code is a React component for a product card. It displays an image, name, category, and price of a product. It also includes buttons for previewing the product and adding it to the cart. The component uses custom hooks for managing the preview modal and the cart functionality.                                                                                                                                                                          |
| [skeleton.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/components\ui\skeleton.tsx)                                             | This code exports a React component called "Skeleton". It takes in HTML attributes and a className prop. Inside the component, it renders a div with predefined classes for animating a pulsating effect. It also assigns the provided className and other props to the div. This component is commonly used to display a loading or placeholder element in UI design.                                                                                             |
| [usecart.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/hooks\usecart.tsx)                                                       | This code defines a CartStore using Zustand, a simple state management library. The store manages the items in a shopping cart, allowing adding, removing, and clearing items. The store's state is persisted using local storage, and toast notifications are displayed for user feedback.                                                                                                                                                                        |
| [use-preview-modal.ts](https://github.com/TheoEwzZer/ecommerce-store/blob/main/hooks\use-preview-modal.ts)                                     | This code is for a Zustand store that manages the state of a preview modal. It keeps track of whether the modal is open, the data that the modal is rendering, and provides functions to open and close the modal.                                                                                                                                                                                                                                                 |
| [utils.ts](https://github.com/TheoEwzZer/ecommerce-store/blob/main/lib\utils.ts)                                                               | The code provides a utility function "cn" that merges multiple class values using clsx and tailwind-merge libraries. It returns a string of merged classes. Also, it exports a number formatter for currency in European format.                                                                                                                                                                                                                                   |
| [modal-provider.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/providers\modal-provider.tsx)                                     | This code defines a ModalProvider component which renders a PreviewModal component. It uses the useState and useEffect hooks from React to manage the state of whether the component is mounted or not. If the component is not mounted, null is returned. Otherwise, the PreviewModal is rendered.                                                                                                                                                                |
| [toast-provider.tsx](https://github.com/TheoEwzZer/ecommerce-store/blob/main/providers\toast-provider.tsx)                                     | This code provides a ToastProvider component that renders a Toaster from the react-hot-toast library, allowing for easy implementation of toast notifications in a React application. It provides a clean and concise way to display temporary messages to the user.                                                                                                                                                                                               |

</details>

---

## 🚀 Getting Started

**_Dependencies_**

Please ensure you have the following dependencies installed on your system:

`- node.js`

`- npm`

### 🔧 Installation

1. Clone the ecommerce-store repository:

```sh
git clone https://github.com/TheoEwzZer/ecommerce-store
```

2. Change to the project directory:

```sh
cd ecommerce-store
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running ecommerce-store

```sh
npm run dev
```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/TheoEwzZer/ecommerce-store/pulls)**: Review open PRs, and submit your own PRs.
- **[Report Issues](https://github.com/TheoEwzZer/ecommerce-store/issues)**: Submit bugs found or log feature requests.

#### Contributing Guidelines

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.

   ```sh
   git clone <your-forked-repo-url>
   ```

3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.

   ```sh
   git checkout -b new-feature-x
   ```

4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.

   ```sh
   git commit -m 'Implemented new feature x.'
   ```

6. **Push to GitHub**: Push the changes to your forked repository.

   ```sh
   git push origin new-feature-x
   ```

7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is licensed under the `MIT` License. See the [LICENSE](https://github.com/TheoEwzZer/ecommerce-store/blob/main/LICENSE) file for additional info.

---
