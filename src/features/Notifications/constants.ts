export enum NotificationType {
  FRIENDSHIP_REQUESTED = 1,
  FRIENDSHIP_ACCEPTED,
  FOLLOWED,
  COMMENTED,
}

export const NotificationText = {
  [NotificationType.FRIENDSHIP_REQUESTED]: "has requested a friendship.",
  [NotificationType.FRIENDSHIP_ACCEPTED]:
    "has accepted your friendship request.",
  [NotificationType.FOLLOWED]: "is following you",
  [NotificationType.COMMENTED]: "is commented to your post.",
};
