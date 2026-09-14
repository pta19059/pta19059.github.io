import Foundation

/// Integration boundary, not an implementation of TeamViewer's iOS SDK.
/// Obtain the current iOS package, API documentation and entitlements from TeamViewer.
/// Replace this boundary with the documented SDK lifecycle, authentication/consent
/// callbacks and an explicit stop-session control. Test on a physical device.
enum TeamViewerIntegration {
    static let configurationMessage = "TeamViewer iOS integration is pending. Add the official SDK package and configure session lifecycle, permissions and the token before enabling support."
}
