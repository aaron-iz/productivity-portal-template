import { classes } from "./DashboardLayoutNavigationClasses";
import "./DashboardLayoutNavigation.css";
import { Text, Divider } from "@mantine/core";
import { GoCheckCircle, GoHome, GoQuestion } from "react-icons/go";
import type { JSX } from "react";

export type NavigationItem = {
    icon?: JSX.Element;
    label: string;
    href?: string;
    items?: NavigationItem[];
};

const navigation: NavigationItem[] = [
    {
        icon: <GoHome />,
        label: "Main",
        items: [
            { label: "Main", href: "/dashboard" },
            { label: "Usage", href: "/usage" },
        ],
    },
    {
        icon: <GoCheckCircle />,
        label: "Resources",
        items: [
            { label: "Packs", href: "/packs" },
            { label: "Users", href: "/users" },
            { label: "Entries", href: "/entries" },
            { label: "Templates", href: "/templates" },
            { label: "Settings", href: "/settings" },
        ],
    },
    {
        icon: <GoQuestion />,
        label: "Support",
        items: [
            { label: "Documentation", href: "/doc" },
            { label: "Contact", href: "/contact" },
        ],
    },
];

type NavigationItemProps = {
    item: NavigationItem;
};

function NavigationItem({ item }: NavigationItemProps) {
    return (
        <a href={item.href}>
            <button className={classes.menuItem}>{item.label}</button>
        </a>
    );
}

export type NavigationGroupItemProps = {
    item: NavigationItem;
};

function NavigationGroupItem({ item }: NavigationGroupItemProps) {
    return (
        <div className={classes.itemGroupContainer}>
            <span className={classes.itemGroupTitle}>
                {item.icon}
                <Text size="xl">{item.label}</Text>
            </span>
            <Divider />

            {item.items && item.items.map((i) => <NavigationItem item={i} />)}
        </div>
    );
}

type DashboardLayoutNavigationProps = {
    items?: NavigationItem[];
};

export default function DashboardLayoutNavigation({
    items,
}: DashboardLayoutNavigationProps) {
    const navigationItems = items || navigation;

    return (
        <div className={classes.navigationContainer}>
            {navigationItems.map((i) => NavigationGroupItem({ item: i }))}
        </div>
    );
}
