<script>
    import HeaderLink from "./HeaderLink.svelte";
    import dg from '../assets/dg.svg?raw'
</script>
<header>
    <div class="container">
        <nav>
            <HeaderLink svg={dg} href="/" label="home" />
        </nav>
        <div class="right">
            Svelte Inspector Update - Svelte Summit 2023
        </div>
    </div>
</header>
<style>
    .container {
        display: flex;
        font-size: 1.2rem;
        padding: 2rem 0;
    }
    .right {
        display: flex;
        gap: 1rem;
        flex-shrink: 0;
    }
    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem 0;
        flex-grow: 1;
    }
</style>
