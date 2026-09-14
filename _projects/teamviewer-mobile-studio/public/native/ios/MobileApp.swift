import SwiftUI
import UIKit

struct Design: Decodable {
    var name: String; var background: String; var backgroundImage: String; var font: String; var elements: [DesignItem]
}
struct DesignItem: Decodable, Identifiable {
    var id: String; var type: String; var text: String; var x: CGFloat; var y: CGFloat; var w: CGFloat; var h: CGFloat
    var color: String; var fill: String; var radius: CGFloat; var fontSize: CGFloat; var bold: Bool; var align: String
    var opacity: Double; var src: String; var fit: String
}
extension Color {
    init(hex: String) {
        if hex == "transparent" { self = .clear; return }
        let n = UInt64(hex.dropFirst(), radix: 16) ?? 0
        self.init(red: Double((n >> 16) & 255)/255, green: Double((n >> 8) & 255)/255, blue: Double(n & 255)/255)
    }
}
func decodedImage(_ uri: String) -> UIImage? {
    guard let encoded = uri.split(separator: ",", maxSplits: 1).last, let data = Data(base64Encoded: String(encoded)) else { return nil }
    return UIImage(data: data)
}
@main struct MobileApp: App { var body: some Scene { WindowGroup { ContentView() } } }
struct ContentView: View {
    @State private var design: Design?
    @State private var message = ""
    @State private var showMessage = false
    var body: some View {
        Group {
            if let design = design {
                GeometryReader { bounds in
                    let scale = min(bounds.size.width/390, bounds.size.height/844)
                    ZStack(alignment: .topLeading) {
                        Color(hex: design.background)
                        if let bg = decodedImage(design.backgroundImage) {
                            Image(uiImage: bg).resizable().scaledToFill().frame(width: 390,height: 844).clipped()
                        }
                        ForEach(design.elements) { item in
                            itemView(item, font: design.font)
                                .frame(width: item.w, height: item.h)
                                .background(Color(hex: item.fill))
                                .clipShape(RoundedRectangle(cornerRadius: item.radius))
                                .opacity(item.opacity/100)
                                .contentShape(Rectangle())
                                .onTapGesture {
                                    if item.type == "support" { message = TeamViewerIntegration.configurationMessage; showMessage = true }
                                    else if item.type == "button" { message = "Connect your app action here: \(item.text)"; showMessage = true }
                                }
                                .position(x: item.x+item.w/2, y: item.y+item.h/2)
                        }
                    }
                    .frame(width: 390, height: 844).clipped()
                    .scaleEffect(scale,anchor: .topLeading)
                    .frame(width: 390*scale,height: 844*scale)
                    .position(x: bounds.size.width/2,y: bounds.size.height/2)
                }.background(Color(hex: design.background))
            } else { Text(message.isEmpty ? "Loading…" : message).padding() }
        }
        .task {
            do {
                guard let url = Bundle.main.url(forResource: "design", withExtension: "json") else { throw CocoaError(.fileNoSuchFile) }
                design = try JSONDecoder().decode(Design.self, from: Data(contentsOf: url))
            } catch { message = "Unable to load the design." }
        }
        .alert("Mobile Studio", isPresented: $showMessage) { Button("OK",role:.cancel) {} } message: { Text(message) }
    }
    @ViewBuilder func itemView(_ item: DesignItem, font: String) -> some View {
        if item.type == "image" {
            if let img = decodedImage(item.src) { Image(uiImage: img).resizable().aspectRatio(contentMode: item.fit == "cover" ? .fill : .fit) }
            else { Image(systemName: "photo").foregroundStyle(Color(hex: item.color)) }
        } else {
            Text(item.text)
                .font(font == "Manrope" ? .custom("Manrope-Regular",size:item.fontSize) : font == "Georgia" ? .custom("Georgia",size:item.fontSize) : .system(size:item.fontSize,design:font == "monospace" ? .monospaced : .default))
                .fontWeight(item.bold ? .bold : .regular)
                .foregroundStyle(Color(hex:item.color))
                .multilineTextAlignment(item.align == "center" ? .center : item.align == "right" ? .trailing : .leading)
                .frame(maxWidth:.infinity,maxHeight:.infinity,alignment:item.align == "center" ? .center : item.align == "right" ? .trailing : .leading)
        }
    }
}
